import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsEmail, IsNotEmpty, IsNumber, IsString, Length } from 'class-validator';

export default class UserDTO {

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Length(3, 50)
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Length(5, 50)
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Length(5, 50)
  password: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  status: boolean;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Length(10, 12)
  document: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  @Length(1, 3)
  age: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Length(7, 15)
  phone: string;

}