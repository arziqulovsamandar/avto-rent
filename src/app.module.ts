import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";
import { AdminModule } from "./admin/admin.module";
import { ClientModule } from "./client/client.module";
import { Admin } from "./admin/model/admin.model";
import { Client } from "./client/model/client.model";
import { MailModule } from "./mail/mail.module";
import { MailService } from "./mail/mail.service";
import { AvtoModule } from './avto/avto.module';
import { AvtoIjaraModule } from './avto_ijara/avto_ijara.module';
import { ImagesModule } from './images/images.module';
import { CompaniyaModule } from './companiya/companiya.module';
import { TypeModule } from './type/type.module';
import { StatusModule } from './status/status.module';
import { TimeModule } from './time/time.module';
import { AvtoEgasiModule } from './avto_egasi/avto_egasi.module';
import { Companiya } from "./companiya/model/companiya.model";
import { Images } from "./images/model/image.model";
import { Status } from "./status/model/status.model";
import { Time } from "./time/model/time.model";
import { Type } from "./type/model/type.model";
import { Avto } from "./avto/model/avto.model";
import { AvtoEgasi } from "./avto_egasi/model/avto_egasi.model";
import { AvtoIjara } from "./avto_ijara/model/avto_ijara.model";

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: ".env", isGlobal: true }),
    SequelizeModule.forRoot({
      dialect: "postgres",
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: String(process.env.POSTGRES_PASSWORD),
      database: process.env.POSTGRES_DB,
      models: [Admin, Client, Companiya,Images,Status,Time,Avto,AvtoEgasi,AvtoIjara,Type],
      autoLoadModels: true,
      logging: false,
    }),
    AdminModule,
    ClientModule,
    MailModule,
    AvtoModule,
    AvtoIjaraModule,
    ImagesModule,
    CompaniyaModule,
    TypeModule,
    StatusModule,
    TimeModule,
    AvtoEgasiModule,
  ],
  controllers: [],
  providers: [MailService],
})
export class AppModule {}
