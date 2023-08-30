import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Companiya } from "../../companiya/model/companiya.model";
import { Client } from "../../client/model/client.model";
import { Avto } from "../../avto/model/avto.model";
import { Time } from "../../time/model/time.model";

interface AvtoIjaraAttr {
  companiya_id:number;
  client_id:number;
  avto_id:number;
  time_id:number;
  start_time:Date;
  end_time:Date;
  price:number;
}

@Table({ tableName: " avto_ijara" })
export class AvtoIjara extends Model<AvtoIjara, AvtoIjaraAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 1, description: "Companiya id" })
  @ForeignKey(() => Companiya)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  companiya_id: number;

  @BelongsTo(() => Companiya)
  companiya: Companiya;

  @ApiProperty({ example: 1, description: "Client id" })
  @ForeignKey(() => Client)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  client_id: number;

  @BelongsTo(() => Client)
  client: Client;

  @ApiProperty({ example: 1, description: "Avto id" })
  @ForeignKey(() => Avto)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  avto_id: number;

  @BelongsTo(() => Avto)
  avto: Avto;

  @ApiProperty({ example: 1, description: "Time id" })
  @ForeignKey(() => Time)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  time_id: number;

  @BelongsTo(() => Time)
  time: Time;

  @ApiProperty({
    example: "2023-08-06",
    description: " boshlanish vaqti",
  })
  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  start_time: Date;

  @ApiProperty({
    example: "2023-08-06",
    description: " tugash vaqti",
  })
  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  end_time: Date;

  @ApiProperty({ example: "200000", description: "narxi" })
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  price: number;
}