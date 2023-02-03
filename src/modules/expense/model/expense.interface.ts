import { Registration } from "src/modules/registration/model/registration.entity";
import { Wallet } from "src/modules/wallet/model/wallet.entity";


export interface ExpenseInterface {
  id: number;
  createdate?: Date;
  txndate?: Date;
  wallet: Wallet;
  registration: Registration;
  expenseamount?: number;

}