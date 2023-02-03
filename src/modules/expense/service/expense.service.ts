import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Expense } from '../model/expense.entity';
import { Wallet } from 'src/modules/wallet/model/wallet.entity';
import { Registration } from 'src/modules/registration/model/registration.entity';
import { ExpenseInterface } from '../model/expense.interface';

@Injectable()
export class ExpenseService {
    constructor(
        @InjectRepository(Expense)
        private readonly expenseRepository: Repository<Expense>,
        @InjectRepository(Wallet)
        private readonly walletRepository: Repository<Wallet>,
        @InjectRepository(Registration)
        private readonly registrationRfepository: Repository<Registration>

    ) { }
    public async insertExpense(expense: ExpenseInterface, userId: Registration["id"], walletId: Wallet["id"]): Promise<void> {
        let userSaveWithExpense: Registration;
        let walletSaveWithExpense: Wallet;
        //check if user exists in the database
        const user = await this.registrationRfepository.findOne({
            where: {
                id: userId,
            },
        });
        //check if wallet exists in the database
        const wallet = await this.walletRepository.findOne({
            where: {
                id: walletId,
            },
        });
        if (user == null && wallet == null) {
            //
        } else {
            try{
                userSaveWithExpense = user;
                walletSaveWithExpense = wallet;
                await this.expenseRepository.save({
                    registration: user,
                    wallet: wallet,
                    expenseamount: expense.expenseamount
                });
            }catch(error){
                throw new BadRequestException(error.detail);
            }
            
        }


    }
}

