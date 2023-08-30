import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { AvtoIjara } from "../../avto_ijara/model/avto_ijara.model";

interface TimeAttr {
  kunlik: string;
  soatlik:string;
  vaqt_qoshish:string
}

@Table({ tableName: "time" })
export class Time extends Model<Time, TimeAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: "Time", description: "avto ijara Time" })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  kunlik: string;
  @ApiProperty({ example: "Time", description: "avto ijara Time" })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  soatlik: string;

  @ApiProperty({ example: "Time", description: "avto ijara Time" })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  vaqt_qoshish: string;

  @HasMany(() => AvtoIjara)
  avtoIjara: AvtoIjara[];
}
