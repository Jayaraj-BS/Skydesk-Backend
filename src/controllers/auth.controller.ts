/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Controller, Get, Post, Put, Patch, Body } from '@nestjs/common';
import { AuthService } from 'src/services/auth.service';

@Controller('auth')
export class AuthController {

constructor(private readonly authService: AuthService) {}

    @Get('fetch-all-users')
    async fetchAllUsers() {
        try {
            return await this.authService.fetchAllUsers();
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    @Post('create-user')
    async createUser(@Body() newUserData: any) {
        try {
            console.log(newUserData);
            return await this.authService.createUser(newUserData);
        } catch (error) {
            console.log(error);
            // eslint-disable-next-line @typescript-eslint/only-throw-error
            return { message: 'User Email Already Exists!' };
        }
    }

    @Post('login')
    async login(@Body() loginData: any) {
        try {
            const { email, password } = loginData;
            return await this.authService.login(email, password);
        } catch (error) {
            console.log(error);
            // eslint-disable-next-line @typescript-eslint/only-throw-error
            return { message: error.message || 'Login Failed' };
        }
    }
}