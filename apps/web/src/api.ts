import { UsersResponse } from "@monorepo-starter/interfaces";
import axios from "axios";

const address: string = 'http://localhost:3000';

export async function getUsers(): Promise<UsersResponse> {
    const res = await axios.get(address+'/users');
    return res.data;
}
