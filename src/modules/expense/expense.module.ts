import { Module } from '@nestjs/common';
import { ExpenseService } from './service/expense.service';
import { RegistrationModule } from '../registration/registration.module';
import { WalletModule } from '../wallet/wallet.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Expense } from './model/expense.entity';
import { Registration } from '../registration/model/registration.entity';
import { Wallet } from '../wallet/model/wallet.entity';
import { ExpenseController } from './controller/expense.controller';

@Module({
  imports: [
    RegistrationModule, WalletModule,
    TypeOrmModule.forFeature([Expense, Registration, Wallet])
  ],
  controllers: [ExpenseController],
  providers: [ExpenseService]
})
export class ExpenseModule { }
