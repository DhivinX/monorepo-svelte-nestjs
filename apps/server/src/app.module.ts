import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import config from './_utils/config';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
    imports: [
        AuthModule,
        UsersModule,

        ConfigModule.forRoot({
            load: [config],
            isGlobal: true,
        }),

        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],

            useFactory: async (configService: ConfigService) => {
                return {
                    type: configService.get<string>('db.type'),
                    host: configService.get<string>('db.host'),
                    port: configService.get<number>('db.port'),
                    database: configService.get<string>('db.database'),
                    username: configService.get<string>('db.username'),
                    password: configService.get<string>('db.password'),
                    synchronize: configService.get<boolean>('db.synchronize'),
                    autoLoadEntities: true,
                } as TypeOrmModuleOptions;
            },
        }),
    ],

    controllers: [],
    providers: [],
})
export class AppModule {}
