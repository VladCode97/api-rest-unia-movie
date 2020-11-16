import { Controller, Post, Res, Body, Get } from '@nestjs/common';
import UserDTO from '../../Common/DTO/user.dto';
import { Response } from 'express';
import { UserService } from './user.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import AuthDTO from 'src/Common/DTO/auth.dto';

@ApiTags('User')
@Controller('User')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('Users')
  @ApiResponse({
    status: 201,
    description: 'This user has been successfully created',
  })
  @ApiResponse({ status: 403, description: 'Forbaiden' })
  async createUser(@Body() user: UserDTO, @Res() response: Response) {
    return response.json(await this.userService.createUser(user));
  }

  @Get('Users')
  @ApiResponse({
    status: 201,
    description: 'Users were successfully uploaded',
  })
  @ApiResponse({ status: 403, description: 'Forbaiden' })
  async viewAllUsers(@Res() response: Response) {
    return response.json(await this.userService.viewUserAll());
  }

  @Post('/SignIn')
  @ApiResponse({
    status: 201,
    description: 'This user has been successfully created',
  })
  @ApiResponse({ status: 403, description: 'User was successfully uploaded' })
  async viewByEmailAndPassword(@Res() response: Response, @Body() user: AuthDTO) {
    return response.json(await this.userService.viewUserByEmailAndPassword(user));
  }
}
