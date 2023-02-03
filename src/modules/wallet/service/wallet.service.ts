import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Wallet } from '../model/wallet.entity';
import { Repository } from 'typeorm';
import { WalletInterface } from '../model/wallet.interface';
import { Registration } from '../../registration/model/registration.entity';
import { IncomeService } from '../../income/service/income.service';
import { Income } from '../../income/model/income.entity';
import { Expense } from '../../expense/model/expense.entity';

@Injectable()
export class WalletService {
    constructor(
        @InjectRepository(Wallet)
        private readonly walletRepository: Repository<Wallet>,
        @InjectRepository(Registration)
        private readonly registrationRfepository: Repository<Registration>,
        @InjectRepository(Income)
        private readonly incomeRepository: Repository<Income>,
        @InjectRepository(Expense)
        private readonly expenseRepository: Repository<Expense>

    ) { }
    public async createWallet(wallet: WalletInterface, userId: Registration["id"]): Promise<any> {
        let userSaveWithWallet: Registration;
        //check if user exists in the database
        const user = await this.registrationRfepository.findOne({
            where: {
                id: userId,
            },
        });
        if (user == null) {
            return { msg: 'user does not exist' };
        } else {
            userSaveWithWallet = user;
            return await this.walletRepository.save({
                registration: user,
                name: wallet.name,
                balance: wallet.balance,
            });
        }


    }

    // public  getWalletInfo(){
    //     var totalIncomePerWallet =  this.incomeService.findAll()
    //   }
    public async getWalletInfo(walletId: Wallet["id"]): Promise<any> {
        const wallet = await this.walletRepository
            .createQueryBuilder('w')
            .where('w.id = :walletId', { walletId })
            .select(['w.name', 'w.balance'])
            .getOne();
        if (wallet == null) {
            return { msg: 'wallet does not exist' };
        } else {
            return wallet;
        }

    }

    public getWallet(walletId: Wallet['id']) {
        const wallet = this.walletRepository.find({
            where: { id: walletId }
        });
        return wallet;
        console.log(wallet);
    }

    public async getUserBalances(userId: Registration['id']) {
        var income = this.incomeRepository.createQueryBuilder("income")
            .where("income.registrationId = :userId", { userId })
            .addSelect('SUM(income.incomeamount)', 'totalIncome')
            .groupBy("income.id")
            .getRawOne();

        const expense = this.expenseRepository.createQueryBuilder("expense")
            .where("expense.registrationId = :userId", { userId })
            .addSelect('SUM(expense.expenseamount)', 'totalExpense')
            .groupBy("expense.id")
            .getRawOne();

        const balance = await income - await expense;
        return { balance: balance };
    }


}

