import { Body, Controller, Post } from '@nestjs/common';
import { from, Observable } from 'rxjs';
import { RegistrationInterface } from '../model/registration.interface';
import { RegistrationService } from '../service/registration.service';

@Controller('registration')
export class RegistrationController {
  constructor(private registrationService: RegistrationService) { }
  //sign up api
  @Post()
  signup(@Body() post: RegistrationInterface): Observable<RegistrationInterface> {
    return from(this.registrationService.createRegistration(post));
  }
}
