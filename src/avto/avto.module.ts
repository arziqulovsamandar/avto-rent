import { Module } from '@nestjs/common';
import { AvtoService } from './avto.service';
import { AvtoController } from './avto.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Avto } from './model/avto.model';
import { Type } from '../type/model/type.model';
import { Status } from '../status/model/status.model';

@Module({
  imports:[SequelizeModule.forFeature([Avto,Type,Status])],
  controllers: [AvtoController],
  providers: [AvtoService],
  exports:[AvtoService]
  
})
export class AvtoModule {}
