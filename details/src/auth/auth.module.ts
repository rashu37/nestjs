import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.startegy';


@Module({
  imports: [
    JwtModule.register({
        secret: 'JWT_SECRET', 
        signOptions: { expiresIn: '1h'}, 
    }),
  ],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService], 
})
export class AuthModule {}
