import{Entity} from 'typeorm'

@Entity('wallet')
export class Wallet{
      id:number;
      createdate:Date;
      txndate:Date;
      name:String;
      balance:number;
      
}