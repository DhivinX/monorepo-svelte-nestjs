import { Axios } from 'axios';

const client = new Axios({
    baseURL: 'http://localhost:3000',
    withCredentials: true,
});

//client.interceptors.response.use(onSuccess, onError);

export { client };
