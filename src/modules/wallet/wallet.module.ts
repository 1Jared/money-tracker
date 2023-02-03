import { Module } from '@nestjs/common';
import { WalletService } from './wallet.service';
import { WalletController } from './wallet.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Wallet } from './wallet.entity';
import { Registration } from '../registration/registration.entity';
import { RegistrationService } from '../registration/registration.service';
import { RegistrationModule } from '../registration/registration.module';

@Module({
  imports: [
    RegistrationModule,
    TypeOrmModule.forFeature([Wallet,Registration])
  ],
  controllers: [WalletController],
  providers: [WalletService]
})
export class WalletModule {}
