import { type } from 'os';
import { BaseEntity } from 'src/base-entity';
import{Column, Entity, ManyToOne, OneToMany} from 'typeorm'
import { Expense } from '../expense/expense.entity';
import { Income } from '../income/income.entity';
import { Registration } from '../registration/registration.entity';

@Entity('wallet')
export class Wallet extends BaseEntity{
    @ManyToOne(() => Registration, wallet => wallet.wallet)
    registration: Registration;
      @OneToMany(() => Expense, expense => expense.wallet, {cascade: true})
    expense: Expense[];
    @OneToMany(() => Income, income => income.wallet, {cascade: true})
    income: Income[];
    @Column( {type: 'varchar' ,length: 100 ,nullable:false})
    name:String;
    @Column( {type: 'integer' ,default:0})
    balance:number;
      
}