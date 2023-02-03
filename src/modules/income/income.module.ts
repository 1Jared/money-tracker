import { Module } from '@nestjs/common';
import { IncomeService } from './income.service';
import { IncomeController } from './income.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Wallet } from '../wallet/wallet.entity';
import { Registration } from '../registration/registration.entity';
import { Income } from './income.entity';
import { RegistrationModule } from '../registration/registration.module';
import { WalletModule } from '../wallet/wallet.module';

@Module({
  imports: [
    RegistrationModule,WalletModule,
    TypeOrmModule.forFeature([Income,Registration,Wallet])
  ],
  controllers: [IncomeController],
  providers: [IncomeService]
})
export class IncomeModule {}
