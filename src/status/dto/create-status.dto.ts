import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateStatusDto {
  @ApiProperty({ example: "status", description: "avto status" })
  @IsString()
  @IsNotEmpty()
  status: string;
}
