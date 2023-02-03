import { Body, Controller, Param, Post } from '@nestjs/common';
import { WalletService } from './wallet.service';
import { WalletInterface } from './wallet.interface';
import { Observable, from } from 'rxjs';

@Controller('wallet')
export class WalletController {
  constructor(private readonly walletService: WalletService) {}
  @Post('createwallet/:userId')
async setAuthStatus(@Body() body: WalletInterface,@Param('userId') userValue: number) {
  return this.walletService.createWallet(body,userValue);
}
}
