import { Body, Controller, Param, Post } from '@nestjs/common';
import { WalletService } from '../service/wallet.service';
import { WalletInterface } from '../model/wallet.interface';
import { Observable, from } from 'rxjs';
import { Get, Query } from '@nestjs/common/decorators';
import { Wallet } from '../model/wallet.entity';
import { IncomeService } from '../../income/service/income.service';
import { Income } from '../../income/model/income.entity';
import { ApiCreatedResponse } from '@nestjs/swagger';

@Controller('wallet')
export class WalletController {
  constructor(private readonly walletService: WalletService) { }
  //create user wallet
  @Post('createwallet/:userId')
  @ApiCreatedResponse({
    description: 'wallet created successfully'
  })
  setAuthStatus(@Body() body: WalletInterface, @Param('userId') userValue: number): Observable<WalletInterface> {
    return from(this.walletService.createWallet(body, userValue));
  }

  //get wallet information for specific user
  @Get('/getwallet')
  getWallet(@Query('id') userId: number): Observable<Wallet[]> {
    return from(this.walletService.getWallet(userId));
  }
  //get user wallet balance
  @Get('/getbalance')
  getWalletBalance(@Query('id') userId: number) {
    return this.walletService.getUserBalances(userId);
  }
  //obtain wallet summary
  @Get('/getwalletsummary')
  getWalletSummary(@Query('id') userId: number) {
    return this.walletService.getUserBalances(userId);
  }



}
