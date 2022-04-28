import { Module } from '../module';
import { Client } from '../client';
import { UserLoginDto } from '@monorepo-starter/dto';
import { UserResponse } from '@monorepo-starter/interfaces';

//await transformAndValidate(UserLoginDto, loginData);

export class AuthModule extends Module {
    constructor(client: Client) {
        super(client);
    }

    async login(dto: UserLoginDto): Promise<UserResponse> {
        const res = await this.client.post('/auth/login', dto);
        return res.data as UserResponse;
    }
}
