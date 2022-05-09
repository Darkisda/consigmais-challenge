import { Either } from '@shared/either';
import { Client } from './client';
import { ClientErrors } from './errors';

export interface ClientRepository {
  findAll(): Promise<Client[]>;
  createClient(
    params: CreateClientParams,
  ): Promise<Either<ClientErrors, Client>>;
}

export type CreateClientParams = {
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
