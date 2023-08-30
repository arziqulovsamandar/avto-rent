import { ApiProperty } from "@nestjs/swagger";
import { 
  Column,
  DataType,
  HasMany,
  Model,
  Table,
} from "sequelize-typescript";
import { AvtoIjara } from "../../avto_ijara/model/avto_ijara.model";

interface CompaniyaAttr {
  name: string;
  address: string;
  phone_number: string;
}

@Table({ tableName: "companiya" })
export class Companiya extends Model<Companiya, CompaniyaAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: "Rent car", description: "Companiya name" })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @ApiProperty({
    example: "Toshkent shaxri",
    description: "Companiya addressi",
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  address: string;

  @ApiProperty({
    example: "+998901234567",
    description: "Companiya telefon raqami",
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  phone_number: string;

  @HasMany(() => AvtoIjara)
  avtoIjara: AvtoIjara[];
}