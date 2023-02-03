import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Wallet } from './wallet.entity';
import { Repository } from 'typeorm';
import { WalletInterface } from './wallet.interface';
import { Registration } from '../registration/registration.entity';

@Injectable()
export class WalletService {
    constructor(
        @InjectRepository(Wallet)
        private readonly walletRepository: Repository<Wallet>,
        @InjectRepository(Registration)
        private readonly registrationRfepository: Repository<Registration>
        
        
    ){}
    public async createWallet(wallet: WalletInterface,userId:Registration["id"]):Promise<void>{
        let userSaveWithWallet: Registration;
        //check if user exists in the database
        const user=await this.registrationRfepository.findOne({
            where: {
                id: userId,
            },
        });
        if (user==null) {
            //TODO:implement
        } else {
            userSaveWithWallet = user;
            await this.walletRepository.save({
                registration: user,
                name: wallet.name, 
                balance: wallet.balance,
            });
        }
        

    }
}

