import axios, { AxiosInstance } from 'axios';
import { Module, ModuleOptions } from './module';

export interface ApiOptions {
    baseUrl: string;
}

interface ModuleClass {
    new (options: ModuleOptions): Module;
}

export class Api {
    private http: AxiosInstance;
    private options: ApiOptions;

    constructor(options: ApiOptions) {
        this.options = options;

        this.http = axios.create({
            baseURL: this.options.baseUrl,
            withCredentials: true,
        });
    }

    public registerModule(module: ModuleClass): void {
        new module({
            http: this.http,
        });
    }
}
