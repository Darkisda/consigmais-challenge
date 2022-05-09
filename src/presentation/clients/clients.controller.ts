import { CreateClientParams } from '@models/client';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { ClientsService } from './clients.service';

@Controller('clients')
export class ClientsController {
  constructor(private readonly service: ClientsService) {}

  @Get()
  async findAll() {
    return await this.service.findAll();
  }

  @Post()
  async registerClient(@Body() params: CreateClientParams) {
    return await this.service.registerClient(params);
  }
}
