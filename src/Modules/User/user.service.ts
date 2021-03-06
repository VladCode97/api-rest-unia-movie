import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Model } from 'mongoose';
import IUser from '../../Common/Interfaces/user.interface';
import UserDTO from '../../Common/DTO/user.dto';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UserService {

  @InjectModel('USER_MODEL')
  private userRepository: Model<IUser>;

  /**
   * @method Create user (User)
   */
  async createUser(user: UserDTO): Promise<HttpException | UserDTO> {
    try {
      (await this.userRepository.create(user)).save();
      return user;
    } catch (e) {
      return new HttpException(e, HttpStatus.FORBIDDEN);
    }
  }

  /**
   * @method view all Users
   */
  async viewUserAll(): Promise<Array<UserDTO> | string | HttpException | any> {
    try {
      const users = await this.userRepository.find({});
      return users.length !== 0 ? users : 'No users found';
    } catch (e) {
      return new HttpException(e, HttpStatus.FORBIDDEN);
    }
  }

  /**
   * @method view By user (Email, password)
   * @param email
   * @param password
   * @param conditions 
   */
  async viewUserByConditions(
    conditions: any,
  ): Promise<string | any | HttpException> {
    try {
      const responseUser = await await this.userRepository.findOne({
        ...conditions,
      });
      return responseUser !== null ? responseUser : 'User no found';
    } catch (e) {
      return new HttpException(e, HttpStatus.FORBIDDEN);
    }
  }
}
