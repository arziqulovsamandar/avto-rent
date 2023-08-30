
import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Avto } from "../../avto/model/avto.model";

interface AvtoEgasiAttr {
  name: string;
  email:string;
  phone_number:string,
  avto_id:number
}

@Table({ tableName: " avto_egasi" })
export class AvtoEgasi extends Model<AvtoEgasi, AvtoEgasiAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: "name", description: "avtoegasi name" })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @ApiProperty({
    example: "ega@gmail.com",
    description: "avto egasi emaili",
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  email: string;

  @ApiProperty({
    example: "+998901234567",
    description: "avto egasi telefon raqami",
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  phone_number: string;

  @ApiProperty({ example: 1, description: "Avto id" })
  @ForeignKey(() => Avto)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  avto_id: number;

  @BelongsTo(() => Avto)
  avto: Avto;
}
