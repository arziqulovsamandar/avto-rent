import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateTypeDto {
  @ApiProperty({ example: "Type", description: "avto type" })
  @IsString()
  @IsNotEmpty()
  name: string;
}
