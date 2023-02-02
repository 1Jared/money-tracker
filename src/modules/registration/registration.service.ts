import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Registration } from './registration.entity';
import { RegistrationInterface } from './registration.interface';

@Injectable()
export class RegistrationService {
    constructor(
        @InjectRepository(Registration)
        private readonly registrationRepository: Repository<Registration>
    ){}
   createRegistration(registrationInterface: RegistrationInterface){
    return this.registrationRepository.save(registrationInterface);
   }
}
