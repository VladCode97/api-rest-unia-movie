import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, Length, IsEmail } from "class-validator";

export default class AuthDTO {
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

}