import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ClientsModule } from './presentation/clients/clients.module';
import { UuidGeneratorService } from './presentation/uuid-generator/uuid-generator.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    ClientsModule,
  ],
  providers: [UuidGeneratorService],
})
export class AppModule {}
