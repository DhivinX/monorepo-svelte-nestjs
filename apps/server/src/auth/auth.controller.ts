import { UserLoginDto } from '@monorepo-svelte-nestjs/dto';
import { Body, Controller, Post, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Response } from 'express';

@Controller('/auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('/login')
    async login(@Body() body: UserLoginDto, @Res({ passthrough: true }) response: Response): Promise<any> {
        return this.authService.login(body, response);
    }
}
