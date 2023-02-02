import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RegistrationModule } from './modules/registration/registration.module';
import {config} from './orm.config'
import { WalletModule } from './modules/wallet/wallet.module';
import { IncomeModule } from './modules/income/income.module';
import { ExpenseModule } from './modules/expense/expense.module';

@Module({
  imports: [RegistrationModule,TypeOrmModule.forRoot(config), WalletModule, IncomeModule, ExpenseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
