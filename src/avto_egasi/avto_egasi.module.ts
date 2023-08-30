import { Module } from '@nestjs/common';
import { AvtoEgasiService } from './avto_egasi.service';
import { AvtoEgasiController } from './avto_egasi.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { AvtoEgasi } from './model/avto_egasi.model';
import { Avto } from '../avto/model/avto.model';

@Module({
  imports:[SequelizeModule.forFeature([AvtoEgasi,Avto])],
  controllers: [AvtoEgasiController],
  providers: [AvtoEgasiService],
  exports:[AvtoEgasiService]
})
export class AvtoEgasiModule {}
