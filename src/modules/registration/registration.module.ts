import { Module } from '@nestjs/common';
import { RegistrationService } from './service/registration.service';
import { RegistrationController } from './controller/registration.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Registration } from './model/registration.entity';
import { WalletService } from '../wallet/service/wallet.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Registration])
  ],
  controllers: [RegistrationController],
  providers: [RegistrationService]
})
export class RegistrationModule {}
