import { CreateClientParams } from '@models/client';
import { Body, Controller, Post } from '@nestjs/common';
import { ClientsService } from './clients.service';

@Controller('clients')
export class ClientsController {
  constructor(private readonly service: ClientsService) {}

  @Post()
  async registerClient(@Body() params: CreateClientParams) {
    return await this.service.registerClient(params);
  }
}
