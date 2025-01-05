import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Details } from '../app.schema';



@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  generateAccessToken(user: Details) {
    const payload = {
      fisrtName:user.firstName,
      lastName:user.lastName,
      email: user.email,
      birthDate:user.birthDate,
      phoneNumber:user.phoneNumber,
      passWord:user.passWord
      };

   return this.jwtService.sign(payload); 
  }

 
}
