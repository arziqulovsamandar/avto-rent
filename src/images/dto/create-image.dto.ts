import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateImageDto {
  @ApiProperty({ example: "images.pg", description: "avto images" })
  @IsString()
  @IsNotEmpty()
  image: string;

  @ApiProperty({ example: 1, description: "avto id" })
  @IsNumber()
  avto_id: number;
}
