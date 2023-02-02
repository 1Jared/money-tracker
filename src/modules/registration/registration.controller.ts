import { Body, Controller, Post } from '@nestjs/common';
import { from, Observable } from 'rxjs';
import { RegistrationInterface } from './registration.interface';
import { RegistrationService } from './registration.service';

@Controller('registration')
export class RegistrationController {
  constructor(private registrationService: RegistrationService){

  }
  @Post()
  signup(@Body() post :RegistrationInterface):Observable<RegistrationInterface>{
   return  from(this.registrationService.createRegistration(post));
  }
}
