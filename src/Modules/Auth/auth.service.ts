import { Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import AuthDTO from 'src/Common/DTO/auth.dto';
import UserDTO from 'src/Common/DTO/user.dto';
import { UserService } from '../User/user.service';

@Injectable()
export default class AuthService {
  @Inject()
  private userService: UserService;

  @Inject()
  private jwtService: JwtService;


  /**
   * sign In
   * @param authUser
   */
  async signIn(authUser: AuthDTO): Promise<string | any> {
    const response = await this.userService.viewUserByConditions(authUser);
    if (response !== 'User no found') {
      const token = this.jwtService.sign({ response }, {algorithm: 'HS512'});
      return { response, token };
    } else return response;
  }

  /**
   * Register user
   * @param user 
   */
  async registerUser(user: UserDTO): Promise<any> {
    return await this.userService.createUser(user);
  }
}
