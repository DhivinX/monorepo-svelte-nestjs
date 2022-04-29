import { AxiosError, AxiosResponse, AxiosResponseHeaders } from 'axios';

export class ResponseError {
    name: string;
    message: string;
    isClientError: boolean;
    status?: number;
    data?: any;
    headers?: AxiosResponseHeaders;

    constructor(name: string, message: string, isClientError: boolean) {
        this.name = name;
        this.message = message;
        this.isClientError = isClientError;
    }
}

export function successHandler(response: AxiosResponse): AxiosResponse {
    return response;
}

export function errorHandler(error: AxiosError): ResponseError {
    if (error.response) {
        const e = new ResponseError('HttpError', error.response.statusText, false);

        e.status = error.response.status;
        e.data = error.response.data as object | [];
        e.headers = error.response.headers;

        throw e;
    }

    throw new ResponseError(error.name, error.message, true);
}
