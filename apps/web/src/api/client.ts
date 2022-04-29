import axios from 'axios';
import { errorHandler, successHandler } from './handlers';

export const client = axios.create({
    baseURL: 'http://localhost:3000',
    withCredentials: true,
});

client.interceptors.response.use(successHandler, errorHandler);
