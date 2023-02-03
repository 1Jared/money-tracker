import { Module } from '@nestjs/common';
import { WalletService } from './service/wallet.service';
import { WalletController } from './controller/wallet.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Wallet } from './model/wallet.entity';
import { Registration } from '../registration/model/registration.entity';
import { RegistrationService } from '../registration/service/registration.service';
import { RegistrationModule } from '../registration/registration.module';
import { IncomeService } from '../income/service/income.service';
import { Income } from '../income/model/income.entity';
import { Expense } from '../expense/model/expense.entity';

@Module({
  imports: [
    RegistrationModule,
    TypeOrmModule.forFeature([Wallet,Registration,Income,Expense])
  ],
  controllers: [WalletController],
  providers: [WalletService]
})
export class WalletModule {}
