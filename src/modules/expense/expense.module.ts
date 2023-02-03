import { Module } from '@nestjs/common';
import { ExpenseService } from './expense.service';
import { ExpenseController } from './expense.controller';
import { RegistrationModule } from '../registration/registration.module';
import { WalletModule } from '../wallet/wallet.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Expense } from './expense.entity';
import { Registration } from '../registration/registration.entity';
import { Wallet } from '../wallet/wallet.entity';

@Module({
  imports: [
    RegistrationModule,WalletModule,
    TypeOrmModule.forFeature([Expense,Registration,Wallet])
  ],
  controllers: [ExpenseController],
  providers: [ExpenseService]
})
export class ExpenseModule {}
