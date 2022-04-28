import { DBHelper } from '@adapters/db';
import { Either } from '@shared/either';

export class MySQLHelper implements DBHelper {
  connect(uri: string): Promise<Either<string, void>> {
    throw new Error('Method not implemented.');
  }
  disconnect(): Promise<Either<string, void>> {
    throw new Error('Method not implemented.');
  }
}
