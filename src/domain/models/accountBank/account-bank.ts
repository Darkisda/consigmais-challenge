import { Bank } from '../bank';

export type AccountBank = {
  bank: Bank;
  agency: number;
  account: number;
  digit: number;
  isSavings: boolean;
  hasAware: boolean;
};
