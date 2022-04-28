import { createConnection, Connection } from 'mysql2/promise';
import { DBConnectionConfig } from '@adapters/db';
import { createLeftSide, createRightSide, Either } from '../../shared/either';

export class MySQLHelper {
  private static connection: Connection = undefined;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private constructor() {}

  static async connect(
    config: DBConnectionConfig,
  ): Promise<Either<string, string>> {
    const { database, host, password, user } = config;

    if (this.connection) {
      return;
    }

    try {
      this.connection = await createConnection({
        host,
        database,
        password,
        user,
        port: 3306,
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0,
      });

      return createRightSide('Connected');
    } catch (error) {
      return createLeftSide(error.message);
    }
  }

  static async getConnection(): Promise<Either<string, Connection>> {
    if (this.connection) {
      return createRightSide(this.connection);
    }

    return createLeftSide('Connecção não está definida');
  }
}
