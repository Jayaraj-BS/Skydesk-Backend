/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/models/user.model';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';


@Injectable()
export class AuthService {

    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
        private jwtService: JwtService,
    ) { }

    async fetchAllUsers() {
        return await this.userRepository.find();
    }

    async createUser(newUserData: any) {
        const checkUser = await this.userRepository.findOne({
            where: {
                email: newUserData?.email,
            }
        });
        if (checkUser) {
            throw new Error('User Email already exists');
        }

        const hashedPassword = await bcrypt.hash(newUserData?.password, 10);
        const newUser = this.userRepository.create({
            name: newUserData?.name,
            email: newUserData?.email,
            password: hashedPassword,
            role: newUserData?.role || 'USER',
        });
        return await this.userRepository.save(newUser);
    }

    async login(email: string, password: string) {
        const checkUser = await this.userRepository.findOne({ where: { email } });
        if (!checkUser) {
            throw new Error('User not found');
        }

        const checkPassword = await bcrypt.compare(password, checkUser.password);
        if (!checkPassword) {
            throw new Error('Invalid password');
        }

        const token = await this.jwtService.signAsync({ id: checkUser.id, email: checkUser.email, role: checkUser.role });
        return { message: 'Login Successful!', token, checkUser }
    }
}
