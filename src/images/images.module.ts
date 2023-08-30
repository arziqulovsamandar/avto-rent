import { Module } from '@nestjs/common';
import { ImagesService } from './images.service';
import { ImagesController } from './images.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Images } from './model/image.model';
import { Avto } from '../avto/model/avto.model';

@Module({
  imports:[SequelizeModule.forFeature([Images,Avto])],
  controllers: [ImagesController],
  providers: [ImagesService],
  exports:[ImagesService]
})
export class ImagesModule {}
