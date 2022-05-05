import { Module } from '@nestjs/common';
import { ClientsController } from './clients.controller';
import { ClientsService } from './clients.service';
import { ClientsRepository } from './clients-repository';
import { UuidGeneratorService } from '../uuid-generator/uuid-generator.service';

@Module({
  controllers: [ClientsController],
  providers: [ClientsService, ClientsRepository, UuidGeneratorService],
})
export class ClientsModule {}
