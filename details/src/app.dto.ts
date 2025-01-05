import { Type } from 'class-transformer';
import {
  IsDate,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  Length,
} from 'class-validator';

export class DetailsDto {
  @IsString()
  @IsNotEmpty()
  @Length(3, 30, { message: 'Name should be min 3 char and max 30 ' })
  firstName: string;

  @IsString()
  @IsNotEmpty()
  @Length(1, 20, { message: 'Last Name should be min 1 char and max 20 ' })
  lastName: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @Type(()=>Date)
  @IsNotEmpty()
  birthDate: Date;

  @IsNumber()
  @IsNotEmpty()
  phoneNumber: number;

  @IsNotEmpty()
  @Length(6, 15, { message: 'password should be min 6 char and max 15 ' })
  passWord: string;
}
