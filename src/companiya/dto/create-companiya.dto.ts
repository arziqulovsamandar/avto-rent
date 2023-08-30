import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsPhoneNumber, IsString } from "class-validator";

export class CreateCompaniyaDto {
  @ApiProperty({ example: "Rent car", description: "Companiya name" })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: "Toshkent shaxri", description: "Companiya addressi" })
  @IsString()
  @IsNotEmpty()
  address: string;

  @ApiProperty({
    example: "+998901234567",
    description: "Companiya telefon raqami",
  })
  @IsPhoneNumber()
  phone_number: string;
}
