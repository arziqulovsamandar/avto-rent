import {  Injectable } from '@nestjs/common';
import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Images } from './model/image.model';
import { ForbiddenException } from '../middleware/error_Handling';

@Injectable()
export class ImagesService {
  constructor(
    @InjectModel(Images)
    private readonly ImagesModel: typeof Images
  ) {}

  async findAll(): Promise<Images[]> {
    try {
      return this.ImagesModel.findAll({ include: { all: true } });
    } catch (error) {
      console.log(error);

      throw new ForbiddenException();
    }
  }

  async findOne(id: number): Promise<Images> {
    try {
      return this.ImagesModel.findByPk(id);
    } catch (error) {
      console.log(error);

      throw new ForbiddenException();
    }
  }

  async create(createImagesDto: CreateImageDto): Promise<Images> {
    try {
      return this.ImagesModel.create(createImagesDto);
    } catch (error) {
      console.log(error);

      throw new ForbiddenException();
    }
  }

  async update(
    id: number,
    updateImagesDto: UpdateImageDto
  ): Promise<Images> {
    try {
      const builder = await this.ImagesModel.update(updateImagesDto, {
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
      const numRowsDeleted = await this.ImagesModel.destroy({
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
