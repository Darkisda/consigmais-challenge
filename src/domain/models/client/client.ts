import { AccountBank } from '../accountBank';

export type Client = {
  id: string;
  fullName: string;
  birthDate: string;
  cpf: string;
  telNumber: string;
  cep: string;
  accountBank?: AccountBank;
  rg: string;
  issuingAgency: string;
  ufDispatch: string;
  streetName: string;
  houseNumber: number;
  state: string;
  neighborhood: string;
  city: string;
  motherName: string;
};
