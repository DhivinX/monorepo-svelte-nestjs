import { UsersResponse } from "@monorepo-starter/interfaces";
import { Injectable } from "@nestjs/common";

@Injectable()
export class UserService{
    async getUsers(): Promise<UsersResponse>{
        return {
            users: [
                {
                    id: '15ca22ba-7a62-413e-a9b9-638a9ee5d98a',
                    firstName: 'John',
                    lastName: 'Smith'
                }
            ]
        }
    }
}
