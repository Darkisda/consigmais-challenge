import { Bank } from '../bank';
import { Client } from '../client';

export type Loan = {
  value: string;
  bank: Bank;
  client: Client;
};
