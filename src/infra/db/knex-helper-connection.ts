import knex from 'knex';
import { DBConnectionConfig } from '@adapters/db';
import path from 'path';

export class KnexConnection {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private constructor() {}

  static async connection(config: DBConnectionConfig) {
    const { database, host, password, user } = config;

    if (this.connection) {
      return;
    }

    try {
      return knex({
        client: 'mysql',
        connection: {
          host,
          database,
          password,
          user,
        },
        migrations: {
          tableName: 'knex_migrations',
          directory: path.resolve(
            __dirname,
            'src',
            'infra',
            'db',
            'migrations',
          ),
        },
        useNullAsDefault: true,
      });
    } catch (error) {
      console.log(error);
    }
  }
}
