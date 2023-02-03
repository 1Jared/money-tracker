import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Wallet } from '../wallet/wallet.entity';
import { Repository } from 'typeorm';
import { Registration } from '../registration/registration.entity';
import { WalletInterface } from '../wallet/wallet.interface';
import { Income } from './income.entity';
import { IncomeInterface } from './income.interface';

@Injectable()
export class IncomeService {
    constructor(
        @InjectRepository(Income)
        private readonly incomeRepository: Repository<Income>,
        @InjectRepository(Wallet)
        private readonly walletRepository: Repository<Wallet>,
        @InjectRepository(Registration)
        private readonly registrationRfepository: Repository<Registration> 
        
    ){}
    public async insertIncome(income: IncomeInterface,userId:Registration["id"],walletId:Wallet["id"]):Promise<void>{
        let userSaveWithIncome: Registration;
        let walletSaveWithIncome: Wallet;
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
            userSaveWithIncome = user;
            walletSaveWithIncome=wallet;
            await this.incomeRepository.save({
                registration: user,
                wallet:wallet,
                incomeamount: income.incomeamount
            });
        }
        

    }
}

