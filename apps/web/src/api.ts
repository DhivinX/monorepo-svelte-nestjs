import { UsersResponse } from "@monorepo-starter/interfaces";
import axios from "axios";

const address = 'http://localhost:3000';

export async function getUsers(): Promise<UsersResponse> {
    const res = await axios.get(address+'/users');
    return res.data as UsersResponse;
}
