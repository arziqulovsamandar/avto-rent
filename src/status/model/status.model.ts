import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Avto } from "../../avto/model/avto.model";

interface StatusAttr {
  status: string;
}

@Table({ tableName: "status" })
export class Status extends Model<Status, StatusAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: "Status", description: "avto Status" })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  status: string;

  @HasMany(() => Avto)
  avto: Avto[];
}
