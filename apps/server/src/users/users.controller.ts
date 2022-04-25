import { UsersResponse } from "@monorepo-starter/interfaces";
import { Controller, Get } from "@nestjs/common";
import { UserService } from "./users.service";

@Controller('/users')
export class UsersController{
    constructor(private usersService: UserService){}

    @Get('/')
    async getUsers(): Promise<UsersResponse>{
        return await this.usersService.getUsers();
    }
}
