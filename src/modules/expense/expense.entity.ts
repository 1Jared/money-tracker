import { BaseEntity } from 'src/base-entity';
import{Column, Entity, ManyToOne} from 'typeorm'
import { Wallet } from '../wallet/wallet.entity';

@Entity('expense')
export class Expense extends BaseEntity{
    @ManyToOne(() => Wallet, wallet=> wallet.expense,{onDelete:'CASCADE',onUpdate:'CASCADE'})
    wallet: Wallet;
    @Column( {type: 'integer' })
      expenseamount:number;
      
}