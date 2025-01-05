import {
  Body,
  Controller,
  Get,
  Headers,
  Param,
  Post,
  Req,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AppService } from './app.service';
import { DetailsDto } from './app.dto';
import { LoginDto } from './app.loginDto';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('save')
  async create(@Body() detailsDto: DetailsDto) {
    try {
      console.log(detailsDto)
      const result= await this.appService.saveDetails(detailsDto);
      console.log(result)
      return result
    } catch (error) {
      return error;
    }
  }

  @Get('read/:id')
  async getRead(@Param('id') id: string) {

    console.log(id)
    const read = await this.appService.getDetails(id);
    return read;
  }

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    const getLogin = await this.appService.login(loginDto);
    return getLogin;
  }

 
  // @Get('profile')
  // async getProfile(@Req() req) {
    
  //   return {
  //     Data:'User Data',
  //     user:req.firstName,
  //   };
  // }
}
