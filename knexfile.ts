import type { Knex } from 'knex';

// Update with your config settings.

const config: { [key: string]: Knex.Config } = {
  development: {
    client: 'mysql2',
    connection: {
      host: 'localhost',
      database: 'consigmais',
      password: 'admin',
      user: 'admin',
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './src/infra/db/migrations',
    },
    useNullAsDefault: true,
  },
};

module.exports = config;
