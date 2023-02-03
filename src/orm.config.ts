import { TypeOrmModuleOptions } from "@nestjs/typeorm"
import { Expense } from "./modules/expense/model/expense.entity"
import { Income } from "./modules/income/model/income.entity"
import { Registration } from "./modules/registration/model/registration.entity"
import { Wallet } from "./modules/wallet/model/wallet.entity"
export const config: TypeOrmModuleOptions = {
    type: 'postgres',
    username: 'postgres',
    password: '?netrixADMIN@320',
    host: '127.0.0.1',
    database: 'money-tracker',
    synchronize: true,
    entities: [Wallet, Registration, Income, Expense]
}