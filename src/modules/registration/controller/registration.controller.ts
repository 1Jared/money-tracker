import { Body, Controller, Post } from '@nestjs/common';
import { from, Observable } from 'rxjs';
import { RegistrationInterface } from '../model/registration.interface';
import { RegistrationService } from '../service/registration.service';
import { ApiResponse } from '@nestjs/swagger';
import { ApiBadRequestResponse, ApiCreatedResponse } from '@nestjs/swagger/dist';

@Controller('registration')
export class RegistrationController {
  constructor(private registrationService: RegistrationService) { }
  //sign up api
  @Post()
  @ApiCreatedResponse({
    description: 'user created successfully'
  })
  @ApiBadRequestResponse({
    description: 'cannot create user. Please Try again'
  })
  signup(@Body() post: RegistrationInterface): Observable<RegistrationInterface> {
    return from(this.registrationService.createRegistration(post));
  }
}
