import { Registration } from "../registration/registration.entity";
import { Wallet } from "../wallet/wallet.entity";

export interface ExpenseInterface  {
    id:number;
      createdate?:Date;
      txndate?:Date;
      wallet:Wallet;
      registration:Registration;
      expenseamount?:number;
      
}