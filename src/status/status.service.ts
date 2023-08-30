import { ForbiddenException, Injectable } from '@nestjs/common';
import { CreateStatusDto } from './dto/create-status.dto';
import { UpdateStatusDto } from './dto/update-status.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Status } from './model/status.model';

@Injectable()
export class StatusService {
  constructor(
    @InjectModel(Status)
    private readonly StatusModel: typeof Status
  ) {}

  async findAll(): Promise<Status[]> {
    try {
      return this.StatusModel.findAll({ include: { all: true } });
    } catch (error) {
      console.log(error);

      throw new ForbiddenException();
    }
  }

  async findOne(id: number): Promise<Status> {
    try {
      return this.StatusModel.findByPk(id);
    } catch (error) {
      console.log(error);

      throw new ForbiddenException();
    }
  }

  async create(createStatusDto: CreateStatusDto): Promise<Status> {
    try {
      return this.StatusModel.create(createStatusDto);
    } catch (error) {
      console.log(error);

      throw new ForbiddenException();
    }
  }

  async update(id: number, updateStatusDto: UpdateStatusDto): Promise<Status> {
    try {
      const builder = await this.StatusModel.update(updateStatusDto, {
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
      const numRowsDeleted = await this.StatusModel.destroy({
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
