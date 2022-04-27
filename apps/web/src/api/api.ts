import axios, { AxiosInstance } from 'axios';
import { AuthModule } from './modules/auth.module';

const http: AxiosInstance = axios.create({
    baseURL: 'http://localhost:3000',
});

export const Api = {
    auth: new AuthModule(http),
};
