import { BaseEntity } from 'src/base-entity';
import{Column, Entity, ManyToOne} from 'typeorm'
import { Wallet } from '../wallet/wallet.entity';
import { Registration } from '../registration/registration.entity';

@Entity('income')
export class Income extends BaseEntity{
    @ManyToOne(() => Wallet, wallet=> wallet.income,{onDelete:'CASCADE',onUpdate:'CASCADE'})
    wallet: Wallet;
    @ManyToOne(() => Registration, registration=> registration.income,{onDelete:'CASCADE',onUpdate:'CASCADE'})
    registration: Registration;
    @Column( {type: 'integer' })
      incomeamount:number;
      
}