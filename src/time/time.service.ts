import { ForbiddenException, Injectable } from '@nestjs/common';
import { CreateTimeDto } from './dto/create-time.dto';
import { UpdateTimeDto } from './dto/update-time.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Time } from './model/time.model';

@Injectable()
export class TimeService {
  constructor(
    @InjectModel(Time)
    private readonly TimeModel: typeof Time
  ) {}

  async findAll(): Promise<Time[]> {
    try {
      return this.TimeModel.findAll({ include: { all: true } });
    } catch (error) {
      console.log(error);

      throw new ForbiddenException();
    }
  }

  async findOne(id: number): Promise<Time> {
    try {
      return this.TimeModel.findByPk(id);
    } catch (error) {
      console.log(error);

      throw new ForbiddenException();
    }
  }

  async create(createTimeDto: CreateTimeDto): Promise<Time> {
    try {
      return this.TimeModel.create(createTimeDto);
    } catch (error) {
      console.log(error);

      throw new ForbiddenException();
    }
  }

  async update(id: number, updateTimeDto: UpdateTimeDto): Promise<Time> {
    try {
      const builder = await this.TimeModel.update(updateTimeDto, {
        where: { id },
        returning: true,
      });
      return builder[1][0].dataValues;
    } catch (error) {
      console.log(error);

      throw new ForbiddenException();
    }
  }

  async delete(id: number): Promise<void> {
    try {
      const numRowsDeleted = await this.TimeModel.destroy({
        where: { id },
      });

      if (numRowsDeleted === 0) {
        throw new Error(`Could not delete venue type with id ${id}`);
      }
    } catch (error) {
      console.log(error);

      throw new ForbiddenException();
    }
  }
}
