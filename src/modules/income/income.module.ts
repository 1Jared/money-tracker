import { Module } from '@nestjs/common';
import { IncomeService } from './service/income.service';
import { IncomeController } from './controller/income.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Wallet } from '../wallet/model/wallet.entity';
import { Registration } from '../registration/model/registration.entity';
import { Income } from './model/income.entity';
import { RegistrationModule } from '../registration/registration.module';
import { WalletModule } from '../wallet/wallet.module';

@Module({
  imports: [
    RegistrationModule, WalletModule,
    TypeOrmModule.forFeature([Income, Registration, Wallet])
  ],
  controllers: [IncomeController],
  providers: [IncomeService]
})
export class IncomeModule { }
