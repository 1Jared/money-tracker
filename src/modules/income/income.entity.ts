import { BaseEntity } from 'src/base-entity';
import{Column, Entity, ManyToOne} from 'typeorm'
import { Wallet } from '../wallet/wallet.entity';

@Entity('income')
export class Income extends BaseEntity{
    @ManyToOne(() => Wallet, wallet=> wallet.income)
    wallet: Wallet;
    @Column( {type: 'integer' })
      incomeamount:number;
      
}