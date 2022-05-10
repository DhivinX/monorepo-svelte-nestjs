import { UserResponse, UsersResponse } from '@monorepo-svelte-nestjs/interfaces';
import { UserCreateDto } from '@monorepo-svelte-nestjs/dto';
import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { hashPassword } from '../_utils/hash-password';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class UserService {
    constructor(private readonly configService: ConfigService) {}

    userFilter(user: User): UserResponse {
        const { id, email, firstName, lastName } = user;
        return { id, email, firstName, lastName };
    }

    async createUser(newUser: UserCreateDto): Promise<UserResponse> {
        const user: User = new User();

        user.email = newUser.email;
        user.hash = hashPassword(
            newUser.password,
            this.configService.get<string>('keys.pwdsalt')
        );
        user.firstName = newUser.firstName;
        user.lastName = newUser.lastName;

        console.log(user);

        await user.save();
        return this.userFilter(user);
    }

    async getUsers(): Promise<UsersResponse> {
        return {
            users: [],
        };
    }
}
