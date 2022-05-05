import { ClientRepositoryImp } from '@infra/db';
import { Injectable } from '@nestjs/common';
import { UuidGeneratorService } from '../uuid-generator/uuid-generator.service';

@Injectable()
export class ClientsRepository extends ClientRepositoryImp {
  constructor(private readonly uuidGen: UuidGeneratorService) {
    super(uuidGen);
  }
}
