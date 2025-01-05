import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DetailsDto } from './app.dto';

import { LoginDto } from './app.loginDto';
import { AuthService } from './auth/auth.service';
import { Details,DetailsSchema } from './app.schema';


@Injectable()
export class AppService {
 
  constructor(
    @InjectModel(Details.name)
    private readonly detailsSchema: Model<Details>,
    private readonly authService:AuthService,
    
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  async saveDetails(detailsDto: DetailsDto) {
    try {
      console.log(detailsDto)
     const { email, phoneNumber } = detailsDto;

      const existEmail = await this.detailsSchema.findOne({ email });
      if (existEmail) {
        return {
          msg: 'user already exist with this email id',
        };
      }
      const existNumber = await this.detailsSchema.findOne({ phoneNumber });
      if (existNumber) {
        return {
          msg: 'This Number is already exist',
        };
      }
      console.log(detailsDto);
      const saved = await new this.detailsSchema(detailsDto);
      saved.save();
      return {
        message: 'Sign In Successfully',
        detatils: saved,
      };
    } catch (error) {
      console.log(error);
    }
  }

  async getDetails(id: string) {
    try {
      const read = await this.detailsSchema.findById(id);
      return read;
    } catch (error) {
      console.log(error);
    }
  }

  async login(loginDto: LoginDto) {
    try {
      const { email, PassWord } = loginDto;
      const userData= await this.detailsSchema.findOne({ email });

      if (!userData) {
        return {
          message: 'User Not Found',
        };
      }

      if (userData.passWord == PassWord) {
        const accessToken=await this.authService.generateAccessToken(userData)
         return {
          message: 'Login Successfully',
          accessToken
          };
      } else {
        return {
          mess: 'Invalid Password',
        };
      }
     
    } catch (error) {
      console.log(error);
    }
  }

  // async validateAccessToken(token: string){
  //   try {
  //     return this.jwtStrategy.validate(token); 
  //   } catch (error) {
  //     throw new Error('Invalid token');
  //   }
  // }
}
