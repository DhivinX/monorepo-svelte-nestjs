export interface ClientOptions {
    baseUrl: string;
}

export type ClientEventCallback = (data?: any) => any;

export interface ClientEvent {
    name: string;
    callback: ClientEventCallback;
}
