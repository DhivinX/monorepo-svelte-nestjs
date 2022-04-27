import { UserLoginDto } from '@monorepo-starter/dto';
import { UserResponse, UsersResponse } from '@monorepo-starter/interfaces';
import axios from 'axios';

const address = 'http://localhost:3000';

export async function login(dto: UserLoginDto): Promise<UserResponse> {
    const res = await axios.post(address + '/auth/login', dto);
    return res.data as UserResponse;
}

export async function getUsers(): Promise<UsersResponse> {
    const res = await axios.get(address + '/users');
    return res.data as UsersResponse;
}
