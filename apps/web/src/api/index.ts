import { Client } from './client';
import { AuthModule } from './modules/auth.module';

const client = new Client({
    baseURL: 'http://localhost:3000',
    withCredentials: true,
});

export const Api = {
    client,
    auth: new AuthModule(client),
};
