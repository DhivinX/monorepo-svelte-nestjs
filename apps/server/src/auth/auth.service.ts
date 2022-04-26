import { UserLoginDto } from '@monorepo-starter/dto';
import { ConfigService } from '@nestjs/config';
import { User } from 'src/users/user.entity';
import { hashPassword } from 'src/_utils/hash-password';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Response } from 'express';
import { v4 as uuid } from 'uuid';
import { sign } from 'jsonwebtoken';
import { JwtPayload } from './jwt.strategy';

@Injectable()
export class AuthService{
    constructor(private readonly configService: ConfigService){}

    async login(loginData: UserLoginDto, response: Response): Promise<any>{
        const user = await User.findOne({
            where: {
                email: loginData.email,
                hash: hashPassword(loginData.password, this.configService.get<string>('keys.pwdsalt'))
            }
        })

        if(!user){
            throw new UnauthorizedException('Invalid login data');
        }

        const token: string = await this.generateToken(user);
        const signedToken = this.createToken(token);

        response.cookie('jwt', signedToken.accessToken, {
            secure: this.configService.get<boolean>('http.secure'),
            domain: this.configService.get<string>('http.domain'),
            httpOnly: true
        });

        return {};
    }

    private createToken(token: string): {accessToken: string, expiresIn: number} {
        const payload: JwtPayload= {
            id: token
        };

        const expiresIn: number = 60 * 60 * 24;
        const accessToken = sign(payload, this.configService.get<string>('keys.jwt'));

        return {
            accessToken: accessToken,
            expiresIn: expiresIn
        };
    }

    private async generateToken(user: User): Promise<string> {
        let token: string;
        let userWithThisToken: User | null = null;

        do{
            token = uuid();
            userWithThisToken = await User.findOne({
                where: {
                    currentToken: token
                }
            });
        }while(!!userWithThisToken);

        user.currentToken = token;
        await user.save();

        return token;
    }
}
