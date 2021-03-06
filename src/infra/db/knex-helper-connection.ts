import knex from 'knex';
import { DBConnectionConfig } from '@adapters/db';
import path from 'path';
import { Client } from '@models/client';

export class KnexConnection {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private constructor() {}

  static async connectionWithClientsTable(config: DBConnectionConfig) {
    const { database, host, password, user } = config;

    try {
      return knex<Client, Client>({
        client: 'mysql2',
        connection: {
          host,
          database,
          password,
          user,
        },
        useNullAsDefault: true,
      });
    } catch (error) {
      console.log(error);
    }
  }
}
