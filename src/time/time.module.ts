import { Module } from '@nestjs/common';
import { TimeService } from './time.service';
import { TimeController } from './time.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Time } from './model/time.model';

@Module({
  imports:[SequelizeModule.forFeature([Time])],
  controllers: [TimeController],
  providers: [TimeService],
  exports:[TimeService]
})
export class TimeModule {}
