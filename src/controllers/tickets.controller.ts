/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { Ticket } from 'src/models/ticket.model';
import { TicketsService } from 'src/services/tickets.service';

@Controller('tickets')
export class TicketsController {

    constructor(private ticketsService: TicketsService) { }

    @Post('create-ticket')
    async createTicket(@Body() ticketData: Ticket) {
        try {
            console.log(ticketData);
            return await this.ticketsService.createTicket(ticketData);
        } catch (error) {
            console.log(error);
            throw error;
        }
    }


    @Get('fetch-all-tickets')
    async fetchAllTickets() {
        try {
            return await this.ticketsService.fetchAllTickets();
        } catch (error) {
            console.log(error);
            throw error;
        }

    }

    @Patch('update-ticket')
    async updateTicket(@Body() ticketData: Ticket) {
        try {
            console.log(ticketData);
            return await this.ticketsService.updateTicket(ticketData);
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    @Delete('delete-ticket/:id')
    async deleteTicket(@Param('id') ticketId: any) {
        try {
            return await this.ticketsService.deleteTicket(ticketId);
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

}
