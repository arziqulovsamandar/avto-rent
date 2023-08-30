import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { AvtoIjara } from "../../avto_ijara/model/avto_ijara.model";
import { Status } from "../../status/model/status.model";
import { Type } from "../../type/model/type.model";
import { AvtoEgasi } from "../../avto_egasi/model/avto_egasi.model";
import { Images } from "../../images/model/image.model";

interface AvtoAttr {
 name:string;
 yili:Date;
 type_id:number;
 nomeri:string;
 yoqilgi_turi:string;
 status_id:number;
 lokatsiya:string;
 ot_kuchi:string;
 yoqilgi_sarfi:string;
 mator_sigimi:string;
 kondensioneri:string;
}

@Table({ tableName: " avto" })
export class Avto extends Model<Avto, AvtoAttr> {
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

  @ApiProperty({
    example: "12.12.2000",
    description: "Avto date",
  })
  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  yili: Date;

  @ApiProperty({
    example: "123",
    description: "Avto nomeri",
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  numeri: string;

  @ApiProperty({ example: "Benzin", description: "Avto yoqilgisi" })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  yoqilgi_turi: string;

  @ApiProperty({
    example: "75HX+M4 Tashkent, Uzbekistan",
    description: "Avto lokatsiya",
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  lokatsiya: string;

  @ApiProperty({
    example: "120Kw",
    description: "Avto ot_kuchi",
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  ot_kuchi: string;

  @ApiProperty({ example: "12l", description: "Avto yoqilgisi" })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  yoqilgi_sarfi: string;

  @ApiProperty({
    example: "2l",
    description: "Avto mator sigimi",
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  mator_sigimi: string;

  @ApiProperty({
    example: "lukus",
    description: "Avto kondensioner",
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  kondensioneri: string;

  @ApiProperty({ example: 1, description: "status id" })
  @ForeignKey(() => Status)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  status_id: number;

  @BelongsTo(() => Status)
  status: Status;

  @ApiProperty({ example: 1, description: "Type id" })
  @ForeignKey(() => Type)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  type_id: number;

  @BelongsTo(() => Type)
  type: Type;

  @HasMany(() => AvtoIjara)
  avtoIjara: AvtoIjara[];

  @HasMany(() => AvtoEgasi)
  avtoEgasi: AvtoEgasi[];

  @HasMany(() => Images)
  images: Images[];
}