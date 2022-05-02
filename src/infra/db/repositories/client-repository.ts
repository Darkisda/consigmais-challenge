import { GenerateUniqueIDProtocol } from '@adapters/protocols';
import {
  Client,
  ClientErrors,
  ClientRepository,
  CreateClientParams,
} from '@models/client';
import { createLeftSide, createRightSide, Either } from '@shared/either';
import { KnexConnection } from '../knex-helper-connection';

export class ClientRepositoryImp implements ClientRepository {
  constructor(private readonly uuidGenerator: GenerateUniqueIDProtocol) {}

  async createClient(
    params: CreateClientParams,
  ): Promise<Either<ClientErrors, Client>> {
    const conn = await KnexConnection.connectionWithClientsTable({
      database: process.env.MYSQL_DATABASE,
      host: process.env.MYSQL_HOST,
      password: process.env.MYSQL_PASSWORD,
      user: process.env.MYSQL_USER,
    });

    try {
      const id = this.uuidGenerator.generate();

      const client: Client = {
        id,
        ...params,
      };

      const clientCreated = await conn.insert<Client>(client);

      return createRightSide(clientCreated);
    } catch (error) {
      console.log(error);
      return createLeftSide(
        'Ocorreu um erro na hora de criar. Reveja suas informações e tente novamente',
      );
    }
  }
}
