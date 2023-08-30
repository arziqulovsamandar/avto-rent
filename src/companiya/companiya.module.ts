import { Module } from '@nestjs/common';
import { CompaniyaService } from './companiya.service';
import { CompaniyaController } from './companiya.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Companiya } from './model/companiya.model';

@Module({
  imports:[SequelizeModule.forFeature([Companiya])],
  controllers: [CompaniyaController],
  providers: [CompaniyaService],
  exports:[CompaniyaService]
})
export class CompaniyaModule {}
