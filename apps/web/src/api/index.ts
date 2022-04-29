import { ResponseError } from './handlers';
import { AuthService } from './services/auth.service';

const Api = {
    auth: AuthService,
};

export { Api, ResponseError };
