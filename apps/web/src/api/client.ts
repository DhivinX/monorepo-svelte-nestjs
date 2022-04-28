import { Axios, AxiosRequestConfig } from 'axios';
import { ClientEvent, ClientEventCallback } from './interfaces';

export class Client extends Axios {
    private events: ClientEvent[] = [];

    constructor(axiosConfig: AxiosRequestConfig<any>) {
        super(axiosConfig);
    }

    emit(eventName: string, data?: any): void {
        const event: ClientEvent | undefined = this.events.find(
            (e: ClientEvent) => e.name === eventName
        );

        event?.callback(data);
    }

    on(eventName: string, callback: ClientEventCallback): void {
        this.events.push({
            name: eventName,
            callback,
        });
    }
}
