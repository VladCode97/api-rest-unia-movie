import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";


export class MovieDTO {

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name_user: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  image_movie: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  description_movie: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  video_movie: string;

}