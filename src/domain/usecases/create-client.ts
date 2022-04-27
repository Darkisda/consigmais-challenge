import {
  Client,
  ClientErrors,
  ClientRepository,
  CreateClientParams,
} from '@models/client';
import {
  createLeftSide,
  createRightSide,
  Either,
  isLeft,
} from '@shared/either';

export class CreateClient {
  constructor(private readonly repository: ClientRepository) {}

  async exec(
    params: CreateClientParams,
  ): Promise<Either<ClientErrors, Client>> {
    const result = await this.repository.createClient(params);

    if (isLeft(result)) {
      return createLeftSide(result.left);
    }

    return createRightSide(result.right);
  }
}
