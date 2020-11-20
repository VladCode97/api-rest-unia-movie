import { UserService } from './user.service';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from '../Database/Models/user.model';


@Module({
  imports: [MongooseModule.forFeature([{name: 'USER_MODEL', schema: UserSchema}])],
  controllers: [],
  providers: [UserService],
})
export class UserModule {}
