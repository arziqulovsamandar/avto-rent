import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateTimeDto {
  @ApiProperty({ example: "time", description: "avto time" })
  @IsString()
  @IsNotEmpty()
  kunlik: string;

  @ApiProperty({ example: "time", description: "avto time" })
  @IsString()
  @IsNotEmpty()
  soatlik: string;

  @ApiProperty({ example: "time", description: "avto time" })
  @IsString()
  @IsNotEmpty()
  vaqt_qoshish: string;
}
