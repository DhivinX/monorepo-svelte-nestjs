import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    const configService = app.get(ConfigService);

    //app.setGlobalPrefix('/api');

    app.use(cookieParser());

    app.enableCors({
        credentials: true, //configService.get<boolean>('http.secure'),
        origin: configService.get<string>('http.domain')
    });

    await app.listen(configService.get<number>('http.port'));
}

bootstrap();
