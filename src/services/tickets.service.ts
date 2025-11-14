/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ticket } from 'src/models/ticket.model';
import { User } from 'src/models/user.model';

@Injectable()
export class TicketsService {

    constructor(
        @InjectRepository(Ticket)
        private ticketRepository: Repository<Ticket>,

        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) { }

    async createTicket(ticketData: any) {
        const assignedUser = ticketData.assigned_to
            ? await this.userRepository.findOne({ where: { id: ticketData.assigned_to } })
            : null;

        const createdUser = ticketData.created_by
            ? await this.userRepository.findOne({ where: { id: ticketData.created_by } })
            : null;

        const newTicket = this.ticketRepository.create({
            title: ticketData.title,
            description: ticketData.description,
            priority: ticketData.priority,
            status: ticketData.status || 'OPEN',
            assigned_to: assignedUser,
            created_by: createdUser,
        } as Partial<Ticket>);

        return await this.ticketRepository.save(newTicket);
    }


    async fetchAllTickets() {
        return await this.ticketRepository.find();
    }

    async updateTicket(ticketData: any) {
        const ticketToUpdate = await this.ticketRepository.findOne({
            where : {
                id: ticketData.id
            }
        })

        if(ticketToUpdate){
            return await this.ticketRepository.update(ticketToUpdate.id, ticketData);
        }
    }

    async deleteTicket(ticketId: any) {
        return await this.ticketRepository.delete(ticketId);
    }
}
