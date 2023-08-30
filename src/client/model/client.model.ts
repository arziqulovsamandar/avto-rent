import { ApiProperty } from "@nestjs/swagger";
import { 
  Column,
  DataType,
  HasMany,
  Model,
  Table,
} from "sequelize-typescript";
import { AvtoIjara } from "../../avto_ijara/model/avto_ijara.model";



interface ClientAttr {
  first_name: string;
  last_name: string;
  phone_number: string;
  email: string;
  password: string;
}

@Table({ tableName: "client" })
export class Client extends Model<Client, ClientAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: "Salim", description: "Client ismi" })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  first_name: string;

  @ApiProperty({ example: "Salimov", description: "Client familiyasi" })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  last_name: string;

  @ApiProperty({
    example: "+998901234567",
    description: "Client telefon raqami",
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  phone_number: string;

  @ApiProperty({ example: "salim@gmail.com", description: "Client emaili" })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  email: string;

  @ApiProperty({ example: "password", description: "Client paroli" })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;

  @HasMany(() => AvtoIjara)
  avtoIjara: AvtoIjara[];
}
