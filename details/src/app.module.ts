import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Details, DetailsSchema } from './app.schema';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { JwtStrategy } from './auth/jwt.startegy';

@Module({
  imports: [
    AuthModule,
    MongooseModule.forRoot('mongodb://localhost/details'),
    MongooseModule.forFeature([{ name: Details.name, schema: DetailsSchema }]),
    JwtModule.register({
      secret: 'JWT_SECRET',
      signOptions: { expiresIn: '1hr' },
    }),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService, AuthService,JwtStrategy],
})
export class AppModule {}
