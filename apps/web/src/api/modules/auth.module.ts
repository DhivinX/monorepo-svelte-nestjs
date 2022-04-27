import { AxiosInstance } from 'axios';
import { UserLoginDto } from '@monorepo-starter/dto';
import { UserResponse } from '@monorepo-starter/interfaces';

//await transformAndValidate(UserLoginDto, loginData);

export class AuthModule {
    constructor(private readonly http: AxiosInstance) {}

    async login(dto: UserLoginDto): Promise<UserResponse> {
        const res = await this.http.post('/auth/login', dto);
        return res.data as UserResponse;
    }
}
