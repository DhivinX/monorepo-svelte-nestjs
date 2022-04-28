import { AxiosResponse } from 'axios';

export interface ApiResponse<T> extends AxiosResponse {
    data: T;
}
