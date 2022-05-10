import { UserLoginDto } from '@monorepo-svelte-nestjs/dto';
import { UserResponse } from '@monorepo-svelte-nestjs/interfaces';
import { AxiosResponse } from 'axios';
import { client } from '../client';

//await transformAndValidate(UserLoginDto, loginData);

export abstract class AuthService {
    static async login(dto: UserLoginDto): Promise<AxiosResponse<UserResponse>> {
        const res = await client.post<UserResponse>('/auth/login', dto);
        return res;
    }
}
