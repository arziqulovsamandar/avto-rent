import { Injectable } from "@nestjs/common";
import { CreateClientDto } from "./dto/create-client.dto";
import { UpdateClientDto } from "./dto/update-client.dto";

import { InjectModel } from "@nestjs/sequelize";
import { Client } from "./model/client.model";
import { ForbiddenException } from "../middleware/error_Handling";

@Injectable()
export class ClientService {
  constructor(
    @InjectModel(Client)
    private readonly clientModel: typeof Client
  ) {}

  async findAll(): Promise<Client[]> {
    try {
      return this.clientModel.findAll({ include: { all: true } });
    } catch (error) {
      console.log(error);
      
      throw new ForbiddenException();
    }
  }

  async findOne(id: number): Promise<Client> {
    try {
      return this.clientModel.findByPk(id);
    } catch (error) {
      console.log(error);
      
     throw new ForbiddenException(); 
    }
  }

  async create(createClientDto: CreateClientDto): Promise<Client> {
    try {
      return this.clientModel.create(createClientDto);
    } catch (error) {
      console.log(error);
      
      throw new ForbiddenException();
    }
    
  }

  async update(id: number, updateClientDto: UpdateClientDto): Promise<Client> {
    try {
      const builder = await this.clientModel.update(updateClientDto, {
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
       const numRowsDeleted = await this.clientModel.destroy({
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
