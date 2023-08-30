import { ApiProperty } from "@nestjs/swagger";
import { IsDateString, IsNumber } from "class-validator";

export class CreateAvtoIjaraDto {
  @ApiProperty({ example: 1, description: "companiya id" })
  @IsNumber()
  companiya_id: number;

  @ApiProperty({ example: 1, description: "client id" })
  @IsNumber()
  client_id: number;

  @ApiProperty({ example: 1, description: "avto id" })
  @IsNumber()
  avto_id: number;

  @ApiProperty({ example: 1, description: "time id" })
  @IsNumber()
  time_id: number;

  @ApiProperty({
    example: "2023-08-06",
    description: " boshlanish vaqti",
  })
  @IsDateString()
  start_time: Date;

  @ApiProperty({ example: "2023-08-07", description: " tugash vaqti" })
  @IsDateString()
  end_time: Date;

  @ApiProperty({ example: 2000000, description: "narxi" })
  @IsNumber()
  price: number;
}
