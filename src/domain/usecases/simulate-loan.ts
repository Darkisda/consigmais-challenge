import { Bank } from '@models/bank';
import { Client } from '@models/client';
import { Loan, LoanErros } from '@models/loan';
import { Either } from '@shared/either';

export interface SimulateLoan {
  simulate(loan: Params): Promise<Either<LoanErros, Loan>>;
}

type Params = {
  value: number;
  client: Client;
  bank: Bank;
};
