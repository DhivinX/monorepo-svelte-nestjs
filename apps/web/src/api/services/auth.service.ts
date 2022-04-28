import { UserLoginDto } from '@monorepo-starter/dto';
import { UserResponse } from '@monorepo-starter/interfaces';
import { ApiResponse } from '../api-response';
import { client } from '../client';

//await transformAndValidate(UserLoginDto, loginData);

export abstract class AuthService {
    static async login(dto: UserLoginDto): Promise<ApiResponse<UserResponse>> {
        const res = await client.post('/auth/login', dto);
        return res as ApiResponse<UserResponse>;
    }
}
