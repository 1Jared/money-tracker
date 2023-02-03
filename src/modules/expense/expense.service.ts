import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Wallet } from '../wallet/wallet.entity';
import { Repository } from 'typeorm';
import { Registration } from '../registration/registration.entity';
import { Expense } from './expense.entity';
import { ExpenseInterface } from './expense.interface';

@Injectable()
export class ExpenseService {
    constructor(
        @InjectRepository(Expense)
        private readonly expenseRepository: Repository<Expense>,
        @InjectRepository(Wallet)
        private readonly walletRepository: Repository<Wallet>,
        @InjectRepository(Registration)
        private readonly registrationRfepository: Repository<Registration> 
        
    ){}
    public async insertExpense(expense: ExpenseInterface,userId:Registration["id"],walletId:Wallet["id"]):Promise<void>{
        let userSaveWithExpense: Registration;
        let walletSaveWithExpense: Wallet;
        //check if user exists in the database
        const user=await this.registrationRfepository.findOne({
            where: {
                id: userId,
            },
        });
        //check if wallet exists in the database
        const wallet=await this.walletRepository.findOne({
            where: {
                id: walletId,
            },
        });
        if (user==null && wallet==null) {
            //TODO:implement
        } else {
            userSaveWithExpense = user;
            walletSaveWithExpense=wallet;
            await this.expenseRepository.save({
                registration: user,
                wallet:wallet,
                expenseamount: expense.expenseamount
            });
        }
        

    }
}

