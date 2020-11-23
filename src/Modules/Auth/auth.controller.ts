import { Body, Controller, Inject, Post, Res } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import UserDTO from 'src/Common/DTO/user.dto';
import AuthService from './auth.service';
import { Response } from 'express';
import AuthDTO from 'src/Common/DTO/auth.dto';

@Controller('Auth')
export class AuthController {
  @Inject()
  private authService: AuthService;

  @Post('Register')
  @ApiResponse({
    status: 201,
    description: 'This user has been successfully created',
  })
  @ApiResponse({ status: 403, description: 'Forbaiden' })
  async createUser(@Body() user: UserDTO, @Res() response: Response) {
    return response.json(await this.authService.registerUser(user));
  }

  @Post('SignIn')
  @ApiResponse({
    status: 201,
    description: 'This user has been successfully created',
  })
  @ApiResponse({ status: 403, description: 'User was successfully uploaded' })
  async viewByEmailAndPassword(
    @Res() response: Response,
    @Body() user: AuthDTO,
  ) {
    return response.json(await this.authService.signIn(user));
  }

  @Post('RecoveryPassword')
  @ApiResponse({
    status: 201,
    description: 'This user has been successfully created',
  })
  @ApiResponse({ status: 403, description: 'User was successfully uploaded' })
  async recoveryPassword(
    @Res() response: Response,
    @Body() email: AuthDTO,
  ) {
    return response.json(await this.authService.recoveryPassword(email));
  }

}
