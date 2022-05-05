import { GenerateUniqueIDProtocol } from '@adapters/protocols';
import { randomUUID } from 'crypto';

export class UUIDGeneratorAdapter implements GenerateUniqueIDProtocol {
  generate(): string {
    return randomUUID();
  }
}
