import { IsEmail, IsNotEmpty } from 'class-validator';

export class LoginDto {
  @IsEmail()
  @IsNotEmpty()
  email: 'string';

  @IsNotEmpty()
  PassWord: 'string';
}
