import { Body, Controller, Param, Post } from '@nestjs/common';
import { IncomeService } from './income.service';
import { IncomeInterface } from './income.interface';

@Controller('income')
export class IncomeController {
  constructor(private readonly incomeService: IncomeService) {}
  @Post('createIncome/:userId/:walletId')
async setAuthStatus(@Body() body: IncomeInterface,@Param('userId') userValue: number,@Param('walletId') walletValue: number) {
  return this.incomeService.insertIncome(body,userValue,walletValue);
}
}
