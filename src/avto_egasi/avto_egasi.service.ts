import { Injectable } from '@nestjs/common';
import { CreateAvtoEgasiDto } from './dto/create-avto_egasi.dto';
import { UpdateAvtoEgasiDto } from './dto/update-avto_egasi.dto';
import { InjectModel } from '@nestjs/sequelize';
import { ForbiddenException } from '../middleware/error_Handling';
import { AvtoEgasi } from './model/avto_egasi.model';

@Injectable()
export class AvtoEgasiService {
  constructor(
    @InjectModel(AvtoEgasi)
    private readonly AvtoEgasiModel: typeof AvtoEgasi
  ) {}

  async findAll(): Promise<AvtoEgasi[]> {
    try {
      return this.AvtoEgasiModel.findAll({ include: { all: true } });
    } catch (error) {
      console.log(error);

      throw new ForbiddenException();
    }
  }

  async findOne(id: number): Promise<AvtoEgasi> {
    try {
      return this.AvtoEgasiModel.findByPk(id);
    } catch (error) {
      console.log(error);

      throw new ForbiddenException();
    }
  }

  async create(createAvtoEgasiDto: CreateAvtoEgasiDto): Promise<AvtoEgasi> {
    try {
      return this.AvtoEgasiModel.create(createAvtoEgasiDto);
    } catch (error) {
      console.log(error);

      throw new ForbiddenException();
    }
  }

  async update(id: number, updateAvtoEgasiDto: UpdateAvtoEgasiDto): Promise<AvtoEgasi> {
    try {
      const builder = await this.AvtoEgasiModel.update(updateAvtoEgasiDto, {
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
      const numRowsDeleted = await this.AvtoEgasiModel.destroy({
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
