import { createConnection, Connection } from 'mysql2/promise';
import { DBConnectionConfig, DBHelper } from '@adapters/db';
import { createLeftSide, createRightSide, Either } from '@shared/either';

export class MySQLHelper implements DBHelper {
  private connection: Connection = undefined;

  async connect(config: DBConnectionConfig): Promise<Either<string, void>> {
    const { database, host, password, user } = config;

    try {
      this.connection = await createConnection({
        host,
        database,
        password,
        user,
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0,
      });
    } catch (error) {
      return createLeftSide(error.message);
    }
  }

  async getConnection(): Promise<Either<string, Connection>> {
    if (this.connection) {
      return createRightSide(this.connection);
    }

    return createLeftSide('Connecção não está definida');
  }
}
