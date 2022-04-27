import { Bank, BankErrors } from '@models/bank';
import { Either } from '@shared/either';

export interface RegisterBank {
  register(params: Params): Promise<Either<BankErrors, Bank>>;
}

type Params = {
  name: string;
};
