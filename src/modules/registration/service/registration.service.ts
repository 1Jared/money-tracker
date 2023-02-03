import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Registration } from '../model/registration.entity';
import { RegistrationInterface } from '../model/registration.interface';

@Injectable()
export class RegistrationService {
    constructor(
        @InjectRepository(Registration)
        private readonly registrationRepository: Repository<Registration>
    ) { }
    createRegistration(registrationInterface: RegistrationInterface) {
        try{
            return this.registrationRepository.save(registrationInterface);
        }catch(error){
            throw new BadRequestException(error.detail);
        }
        
    }
}
