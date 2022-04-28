import { AxiosError, AxiosResponse } from 'axios';

export function onSuccess(response: AxiosResponse): AxiosResponse {
    return response;
}

export function onError(error: AxiosError) {
    console.log('onError');
    console.log(error);
    return error;
}
