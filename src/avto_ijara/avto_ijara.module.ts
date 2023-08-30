import { Module } from '@nestjs/common';
import { AvtoIjaraService } from './avto_ijara.service';
import { AvtoIjaraController } from './avto_ijara.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { AvtoIjara } from './model/avto_ijara.model';
import { Companiya } from '../companiya/model/companiya.model';
import { Time } from '../time/model/time.model';
import { Client } from '../client/model/client.model';
import { Avto } from '../avto/model/avto.model';

@Module({
  imports:[SequelizeModule.forFeature([AvtoIjara,Companiya,Time,Client,Avto])],
  controllers: [AvtoIjaraController],
  providers: [AvtoIjaraService],
  exports:[AvtoIjaraService]
})
export class AvtoIjaraModule {}
