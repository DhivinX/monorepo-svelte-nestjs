import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    const configService = app.get(ConfigService);

    //app.setGlobalPrefix('/api');

    app.enableCors({
        origin: configService.get<string[]>('http.cors'),
        credentials: true,
    });

    app.use(helmet());
    app.use(cookieParser());

    app.useGlobalPipes(new ValidationPipe());

    await app.listen(configService.get<number>('http.port'));
}

bootstrap();
