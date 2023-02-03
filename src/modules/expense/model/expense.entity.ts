import { BaseEntity } from 'src/base-entity';
import { Column, Entity, ManyToOne } from 'typeorm'
import { Wallet } from '../../wallet/model/wallet.entity';
import { Registration } from '../../registration/model/registration.entity';

@Entity('expense')
export class Expense extends BaseEntity {
  @ManyToOne(() => Wallet, wallet => wallet.expense, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  wallet: Wallet;
  @ManyToOne(() => Registration, registration => registration.income, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  registration: Registration;
  @Column({ type: 'integer' })
  expenseamount: number;

}