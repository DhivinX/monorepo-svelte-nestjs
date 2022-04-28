import { Api } from './api';
import { AuthModule } from './modules/auth.module';

const $api = new Api({
    baseUrl: 'http://localhost:3000',
});

$api.registerModule(AuthModule);

export { $api };
