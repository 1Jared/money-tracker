import { Registration } from "../../registration/model/registration.entity";
import { Wallet } from "../../wallet/model/wallet.entity";

export interface IncomeInterface {
  id: number;
  createdate?: Date;
  txndate?: Date;
  wallet: Wallet;
  registration: Registration;
  incomeamount?: number;

}