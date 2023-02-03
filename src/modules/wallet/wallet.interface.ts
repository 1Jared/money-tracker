import { Registration } from "../registration/registration.entity";

export interface WalletInterface  {
    id:number;
      createdate?:Date;
      txndate?:Date;
      name:String;
      registration:Registration;
      balance?:number;
      
}