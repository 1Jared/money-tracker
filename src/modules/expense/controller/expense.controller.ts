import { Body, Controller, Param, Post } from '@nestjs/common';
import { ExpenseService } from '../service/expense.service';
import { ExpenseInterface } from '../model/expense.interface';

@Controller('expense')
export class ExpenseController {
  constructor(private readonly expenseService: ExpenseService) { }
  @Post('createExpense/:userId/:walletId')
  async setAuthStatus(@Body() body: ExpenseInterface, @Param('userId') userValue: number, @Param('walletId') walletValue: number) {
    return this.expenseService.insertExpense(body, userValue, walletValue);
  }
}
