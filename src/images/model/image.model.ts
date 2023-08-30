import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Avto } from "../../avto/model/avto.model";

interface ImagesAttr {
  image: string;
  avto_id:number;
}

@Table({ tableName: "images" })
export class Images extends Model<Images, ImagesAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: "images", description: "avto images" })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  image: string;

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
