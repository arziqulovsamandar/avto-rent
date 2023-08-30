import { ApiProperty } from "@nestjs/swagger";

import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Avto } from "../../avto/model/avto.model";


interface TypeAttr {
 name:string;
}

@Table({ tableName: "type" })
export class Type extends Model<Type, TypeAttr> {
  @ApiProperty({ example: 1, description: "UNIQUE ID" })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: "Mers", description: "Avto name" })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @HasMany(() => Avto)
  avto: Avto[];
}