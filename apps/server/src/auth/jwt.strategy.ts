import { Strategy } from 'passport-jwt';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ConfigService } from '@nestjs/config';
import { User } from '../users/user.entity';

export interface JwtPayload {
    id: string;
}

function cookieExtractor(req: any): null | string {
    return req && req.cookies ? (req.cookies?.jwt as string) ?? null : null;
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
    constructor(configService: ConfigService) {
        super({
            jwtFromRequest: cookieExtractor,
            secretOrKey: configService.get<string>('keys.jwt'),
        });
    }

    async validate(payload: JwtPayload, done: (error, user) => void) {
        if (!payload || !payload.id) {
            return done(new UnauthorizedException(), false);
        }

        const user = await User.findOne({
            where: {
                currentToken: payload.id,
            },
        });

        if (!user) {
            return done(new UnauthorizedException(), false);
        }

        done(null, user);
    }
}
