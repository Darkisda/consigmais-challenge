import { UUIDGeneratorAdapter } from '@infra/id';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UuidGeneratorService extends UUIDGeneratorAdapter {}
