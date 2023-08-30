import { ForbiddenException, Injectable } from '@nestjs/common';
import { CreateAvtoIjaraDto } from './dto/create-avto_ijara.dto';
import { UpdateAvtoIjaraDto } from './dto/update-avto_ijara.dto';
import { InjectModel } from '@nestjs/sequelize';
import { AvtoIjara } from './model/avto_ijara.model';

@Injectable()
export class AvtoIjaraService {
  constructor(
    @InjectModel(AvtoIjara)
    private readonly AvtoIjaraModel: typeof AvtoIjara
  ) {}

  async findAll(): Promise<AvtoIjara[]> {
    try {
      return this.AvtoIjaraModel.findAll({ include: { all: true } });
    } catch (error) {
      console.log(error);

      throw new ForbiddenException();
    }
  }

  async findOne(id: number): Promise<AvtoIjara> {
    try {
      return this.AvtoIjaraModel.findByPk(id);
    } catch (error) {
      console.log(error);

      throw new ForbiddenException();
    }
  }

  async create(createAvtoIjaraDto: CreateAvtoIjaraDto): Promise<AvtoIjara> {
    try {
      return this.AvtoIjaraModel.create(createAvtoIjaraDto);
    } catch (error) {
      console.log(error);

      throw new ForbiddenException();
    }
  }

  async update(id: number, updateAvtoIjaraDto: UpdateAvtoIjaraDto): Promise<AvtoIjara> {
    try {
      const builder = await this.AvtoIjaraModel.update(updateAvtoIjaraDto, {
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
      const numRowsDeleted = await this.AvtoIjaraModel.destroy({
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
