import { AxiosInstance } from 'axios';

export interface ModuleOptions {
    http: AxiosInstance;
}

export class Module {
    protected http: AxiosInstance;

    constructor(options: ModuleOptions) {
        this.http = options.http;
    }
}
