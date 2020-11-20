import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsEmpty, IsString, IsNumber, Length } from 'class-validator';

export default class SubscriptionDTO {

  @ApiProperty()
  @IsEmpty()
  @IsDate()
  createDateSubscriptions: Date;

  @ApiProperty()
  @IsEmpty()
  @IsString()
  @Length(5, 15)
  typePlaneSubscriptions: string;

  @ApiProperty()
  @IsEmpty()
  @IsNumber()
  priceSubscriptions: number;
}
