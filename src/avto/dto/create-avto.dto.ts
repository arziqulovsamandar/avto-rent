import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";


export class CreateAvtoDto {
  @ApiProperty({ example: 1, description: "type id" })
  @IsNumber()
  type_id: number;

  @ApiProperty({ example: 1, description: "status id" })
  @IsNumber()
  status_id: number;

  @ApiProperty({ example: "mers", description: "Avto name" })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: "12.12.2000", description: "avto yili" })
  @IsNotEmpty()
  yili: Date;

  @ApiProperty({
    example: "111",
    description: "avto nomeri",
  })
  @IsString()
  nomeri: string;

  @ApiProperty({ example: "benzin", description: "Avto yoqilgi_turi" })
  @IsString()
  @IsNotEmpty()
  yoqilgi_turi: string;

  @ApiProperty({ example: "12Sws ", description: "avto loakasiyasi" })
  @IsNotEmpty()
  lokatsiya: string;

  @ApiProperty({
    example: "120Kw",
    description: "avto ot_kuchi",
  })
  @IsString()
  @IsNotEmpty()
  ot_kuchi: string;

  @ApiProperty({ example: "12l ", description: "avto yoqilgi sarfi" })
  @IsNotEmpty()
  yoqilgi_sarfi: string;

  @ApiProperty({
    example: "1,2 l",
    description: "avto mator sigimi",
  })
  @IsString()
  @IsNotEmpty()
  mator_sigimi: string;

  @ApiProperty({
    example: "lukus",
    description: "avto  kondensioneri",
  })
  @IsString()
  @IsNotEmpty()
  kondensioneri: string;
}
