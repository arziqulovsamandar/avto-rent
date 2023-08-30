import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsNumber, IsPhoneNumber, IsString } from "class-validator";

export class CreateAvtoEgasiDto {
  @ApiProperty({ example: "Avto egasi name", description: "Avto egasi  name" })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: "salim@gmail.com", description: "Avto egasi emaili" })
  @IsEmail()
  email: string;

  @ApiProperty({
    example: "+998901234567",
    description: "Avto egasi telefon raqami",
  })
  @IsPhoneNumber()
  phone_number: string;

  @ApiProperty({ example: 1, description: "avto id" })
  @IsNumber()
  avto_id: number;
}
