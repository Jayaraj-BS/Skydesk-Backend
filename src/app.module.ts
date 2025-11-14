/* eslint-disable prettier/prettier */
import { AuthModule } from './modules/auth.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './controllers/users.controller';
import { TicketsController } from './controllers/tickets.controller';
import { UsersService } from './services/users.service';
import { TicketsService } from './services/tickets.service';
import { UsersModule } from './modules/users.module';
import { TicketsModule } from './modules/tickets.module';
import { AuthController } from './controllers/auth.controller';
import { AuthService } from './services/auth.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'rajumysql',
      database: 'skydesk',
      autoLoadEntities: true,
      synchronize: true,
    }),
    AuthModule,
    UsersModule,
    TicketsModule,
  ],
  controllers: [AppController, UsersController, TicketsController, AuthController],
  providers: [AppService, UsersService, TicketsService, AuthService],
})
export class AppModule {}
