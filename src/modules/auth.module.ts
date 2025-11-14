/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UsersModule } from './users.module';
import { AuthController } from 'src/controllers/auth.controller';
import { AuthService } from 'src/services/auth.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
    imports: [
        UsersModule,
        JwtModule.register({
            global: true,
            secret: 'SECRET_KEY',
            signOptions: { expiresIn: '1d' },
        })
    ],
    controllers: [AuthController],
    providers: [AuthService],
})
export class AuthModule { }
