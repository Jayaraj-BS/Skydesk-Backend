import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TicketsController } from 'src/controllers/tickets.controller';
import { Ticket } from 'src/models/ticket.model';
import { User } from 'src/models/user.model';
import { TicketsService } from 'src/services/tickets.service';

@Module({
  imports: [TypeOrmModule.forFeature([Ticket, User])],
  providers: [TicketsService],
  controllers: [TicketsController],
  exports: [TypeOrmModule],
})
export class TicketsModule {}
