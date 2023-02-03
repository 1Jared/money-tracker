import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Wallet } from '../../wallet/model/wallet.entity';
import { Repository } from 'typeorm';
import { Registration } from '../../registration/model/registration.entity';
import { WalletInterface } from '../../wallet/model/wallet.interface';
import { Income } from '../model/income.entity';
import { IncomeInterface } from '../model/income.interface';

@Injectable()
export class IncomeService {
    findAll() {
        return this.incomeRepository.find();
    }
    constructor(
        @InjectRepository(Income)
        private readonly incomeRepository: Repository<Income>,
        @InjectRepository(Wallet)
        private readonly walletRepository: Repository<Wallet>,
        @InjectRepository(Registration)
        private readonly registrationRfepository: Repository<Registration>

    ) { }
    public async insertIncome(income: IncomeInterface, userId: Registration["id"], walletId: Wallet["id"]): Promise<void> {
        let userSaveWithIncome: Registration;
        let walletSaveWithIncome: Wallet;
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
            //TODO:implement
        } else {
            userSaveWithIncome = user;
            walletSaveWithIncome = wallet;
            await this.incomeRepository.save({
                registration: user,
                wallet: wallet,
                incomeamount: income.incomeamount
            });
        }


    }


}

