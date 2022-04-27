import { Client, ClientErrors } from '@models/client';
import { Either } from '@shared/either';

export interface CreateClient {
  create(params: Params): Promise<Either<ClientErrors, Client>>;
}

type Params = {
  fullName: string;
  birthDate: string;
  cpf: string;
  telNumber: string;
  cep: string;
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
