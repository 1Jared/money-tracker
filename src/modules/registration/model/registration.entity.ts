
import { BaseEntity } from 'src/base-entity';
import { Column, Entity, OneToMany } from 'typeorm'
import { Wallet } from '../../wallet/model/wallet.entity';
import { Income } from '../../income/model/income.entity';
import { Expense } from '../../expense/model/expense.entity';

@Entity('user')
export class Registration extends BaseEntity {
  @Column({ type: 'varchar', length: 100, nullable: false })
  firstname: String;
  @Column({ type: 'varchar', length: 100, nullable: true })
  middlename: String;
  @Column({ type: 'varchar', length: 100, nullable: true })
  lastnamename: String;
  @Column({ type: 'date', nullable: true })
  dob?: Date;
  @Column({ type: 'varchar', length: 100, nullable: false })
  username: String;
  @Column({ type: 'varchar', length: 100, nullable: false })
  userpass: String;
  @OneToMany(() => Wallet, wallet => wallet.registration, { cascade: true })
  wallet: Wallet[];
  @OneToMany(() => Income, income => income.registration, { cascade: true })
  income: Income[];
  @OneToMany(() => Expense, expense => expense.registration, { cascade: true })
  expense: Expense[];

}