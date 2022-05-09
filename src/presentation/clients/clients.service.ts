import { Injectable } from '@nestjs/common';
import { ClientsRepository } from './clients-repository';
import { CreateClientParams } from '@models/client';
import { CreateClient } from '@usecase/create-client';

@Injectable()
export class ClientsService {
  constructor(private readonly repository: ClientsRepository) {}

  async findAll() {
    return await this.repository.findAll();
  }
  async registerClient(params: CreateClientParams) {
    const useCase = new CreateClient(this.repository);
    return await useCase.exec(params);
  }
}
