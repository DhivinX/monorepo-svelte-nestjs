import { UserLoginDto } from '@monorepo-starter/dto';
import { UserResponse } from '@monorepo-starter/interfaces';
import { Module, ModuleOptions } from '../module';

//await transformAndValidate(UserLoginDto, loginData);

export class AuthModule extends Module {
    constructor(options: ModuleOptions) {
        super(options);
    }

    async login(dto: UserLoginDto): Promise<UserResponse> {
        const res = await this.http.post('/auth/login', dto);
        return res.data as UserResponse;
    }
}
