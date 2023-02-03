import { Registration } from "../registration/registration.entity";
import { Wallet } from "../wallet/wallet.entity";

export interface IncomeInterface  {
    id:number;
      createdate?:Date;
      txndate?:Date;
      wallet:Wallet;
      registration:Registration;
      incomeamount?:number;
      
}