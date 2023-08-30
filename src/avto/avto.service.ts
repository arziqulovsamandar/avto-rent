import { Injectable } from '@nestjs/common';
import { CreateAvtoDto } from './dto/create-avto.dto';
import { UpdateAvtoDto } from './dto/update-avto.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Avto } from './model/avto.model';
import { ForbiddenException } from "../middleware/error_Handling";


@Injectable()
export class AvtoService {
  constructor(
    @InjectModel(Avto)
    private readonly AvtoModel: typeof Avto
  ) {}

  async findAll(): Promise<Avto[]> {
    try {
      return this.AvtoModel.findAll({ include: { all: true } });
    } catch (error) {
      console.log(error);

      throw new ForbiddenException();
    }
  }

  async findOne(id: number): Promise<Avto> {
    try {
      return this.AvtoModel.findByPk(id);
    } catch (error) {
      console.log(error);

      throw new ForbiddenException();
    }
  }

  async create(createAvtoDto: CreateAvtoDto): Promise<Avto> {
    try {
      return this.AvtoModel.create(createAvtoDto);
    } catch (error) {
      console.log(error);

      throw new ForbiddenException();
    }
  }

  async update(id: number, updateAvtoDto: UpdateAvtoDto): Promise<Avto> {
    try {
      const builder = await this.AvtoModel.update(updateAvtoDto, {
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
      const numRowsDeleted = await this.AvtoModel.destroy({
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
