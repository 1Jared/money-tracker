import { Body, Controller, Param, Post } from '@nestjs/common';
import { IncomeService } from '../service/income.service';
import { IncomeInterface } from '../model/income.interface';
import { from } from 'rxjs';

@Controller('income')
export class IncomeController {
  constructor(private readonly incomeService: IncomeService) { }

  //create user income
  @Post('createIncome/:userId/:walletId')
  async setAuthStatus(@Body() body: IncomeInterface, @Param('userId') userValue: number, @Param('walletId') walletValue: number) {
    return from(this.incomeService.insertIncome(body, userValue, walletValue));
  }
}
