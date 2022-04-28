import { Either } from '@shared/either';
import { DBConnectionConfig } from './db-conn-config';

export interface DBHelper {
  connect(config: DBConnectionConfig): Promise<Either<string, void>>;
}
