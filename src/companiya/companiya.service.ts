import { Injectable } from '@nestjs/common';
import { CreateCompaniyaDto } from './dto/create-companiya.dto';
import { UpdateCompaniyaDto } from './dto/update-companiya.dto';
import { ForbiddenException } from '../middleware/error_Handling';
import { InjectModel } from '@nestjs/sequelize';
import { Companiya } from './model/companiya.model';

@Injectable()
export class CompaniyaService {
  constructor(
    @InjectModel(Companiya)
    private readonly CompaniyaModel: typeof Companiya
  ) {}

  async findAll(): Promise<Companiya[]> {
    try {
      return this.CompaniyaModel.findAll({ include: { all: true } });
    } catch (error) {
      console.log(error);

      throw new ForbiddenException();
    }
  }

  async findOne(id: number): Promise<Companiya> {
    try {
      return this.CompaniyaModel.findByPk(id);
    } catch (error) {
      console.log(error);

      throw new ForbiddenException();
    }
  }

  async create(createCompaniyaDto: CreateCompaniyaDto): Promise<Companiya> {
    try {
      return this.CompaniyaModel.create(createCompaniyaDto);
    } catch (error) {
      console.log(error);

      throw new ForbiddenException();
    }
  }

  async update(id: number, updateCompaniyaDto: UpdateCompaniyaDto): Promise<Companiya> {
    try {
      const builder = await this.CompaniyaModel.update(updateCompaniyaDto, {
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
      const numRowsDeleted = await this.CompaniyaModel.destroy({
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
