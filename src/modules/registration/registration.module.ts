import { Module } from '@nestjs/common';
import { RegistrationService } from './registration.service';
import { RegistrationController } from './registration.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Registration } from './registration.entity';
import { WalletService } from '../wallet/wallet.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Registration])
  ],
  controllers: [RegistrationController],
  providers: [RegistrationService]
})
export class RegistrationModule {}
