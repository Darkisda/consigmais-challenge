import { Either } from '@shared/either';

export interface DBHelper {
  connect(uri: string): Promise<Either<string, void>>;
  disconnect(): Promise<Either<string, void>>;
}
