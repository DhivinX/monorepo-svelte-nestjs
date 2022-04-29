import { UserLoginDto } from '@monorepo-starter/dto';
import { UserResponse } from '@monorepo-starter/interfaces';
import { AxiosResponse } from 'axios';
import { client } from '../client';

//await transformAndValidate(UserLoginDto, loginData);

export abstract class AuthService {
    static async login(dto: UserLoginDto): Promise<AxiosResponse<UserResponse>> {
        const res = await client.post<UserResponse>('/auth/login', dto);
        return res;
    }
}
