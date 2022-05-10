import { UsersResponse } from '@monorepo-svelte-nestjs/interfaces';
import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserService } from './users.service';

@Controller('/users')
@UseGuards(AuthGuard('jwt'))
export class UsersController {
    constructor(private readonly usersService: UserService) {}

    @Get('/')
    async getUsers(): Promise<UsersResponse> {
        return await this.usersService.getUsers();
    }
}
