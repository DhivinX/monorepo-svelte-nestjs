import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
    const app = await NestFactory.create(AppModule, {
        cors: true
    });

    const configService = app.get(ConfigService);

    //app.setGlobalPrefix('/api');

    app.use(helmet());
    app.use(cookieParser());
    
    app.useGlobalPipes(new ValidationPipe());

    await app.listen(configService.get<number>('http.port'));
}

bootstrap();
