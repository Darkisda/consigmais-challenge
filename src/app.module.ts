import { Module } from '@nestjs/common';
import { ClientsModule } from './presentation/clients/clients.module';

@Module({
  imports: [ClientsModule],
})
export class AppModule {}
