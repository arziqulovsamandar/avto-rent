import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNotEmpty, IsPhoneNumber, IsEmail } from "class-validator";

export class CreateClientDto {
    @ApiProperty({ example: "Salim", description: "Client ismi" })
    @IsString()
    @IsNotEmpty()
    first_name: string;

    @ApiProperty({ example: "Salimov", description: "Client familiyasi" })
    @IsString()
    @IsNotEmpty()
    last_name: string;
    

    @ApiProperty({
        example: "+998901234567",
        description: "Client telefon raqami",
    })
    @IsPhoneNumber()
    phone_number: string;

 
    @ApiProperty({ example: "salim@gmail.com", description: "Client emaili" })
    @IsEmail()
    email: string;

    @ApiProperty({ example: "password", description: "Client paroli" })
    @IsString()
    @IsNotEmpty()
    password: string;

    @ApiProperty({ example: "confirm_password", description: "Admin paroli" })
    @IsString()
    @IsNotEmpty()
    confirm_password: string;
}
