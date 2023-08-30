import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from "@nestjs/common";
import { ClientService } from "./client.service";
import { CreateClientDto } from "./dto/create-client.dto";
import { UpdateClientDto } from "./dto/update-client.dto";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Client } from "./model/client.model";
import { ForbiddenException } from "../middleware/error_Handling";


@ApiTags("Client")
@Controller("client")
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @ApiOperation({ summary: "All Client" })
  @Get()
  async findAll(): Promise<Client[]> {
      return this.clientService.findAll();
  }

  @ApiOperation({ summary: "Id Serach Client" })
  @Get(":id")
  async findOne(@Param("id") id: number): Promise<Client> {
    return this.clientService.findOne(id);
  }

  @ApiOperation({ summary: "Create Region" })
  @Post()
  async create(@Body() createClientDto: CreateClientDto): Promise<Client> {
    return this.clientService.create(createClientDto);
  }

  @ApiOperation({ summary: "Update Client" })
  @Put(":id")
  async update(
    @Param("id") id: number,
    @Body() updateClientDto: UpdateClientDto
  ): Promise<Client> {
    return this.clientService.update(id, updateClientDto);
  }

  @ApiOperation({ summary: "Delete Client" })
  @Delete(":id")
  async delete(@Param("id") id: number): Promise<void> {
  
      return this.clientService.delete(id);
    
  }
}
