import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AvtoService } from './avto.service';
import { CreateAvtoDto } from './dto/create-avto.dto';
import { UpdateAvtoDto } from './dto/update-avto.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags("Avto")
@Controller("avto")
export class AvtoController {
  constructor(private readonly avtoService: AvtoService) {}

  @ApiOperation({ summary: "Create Avto" })
  @Post()
  create(@Body() createAvtoDto: CreateAvtoDto) {
    return this.avtoService.create(createAvtoDto);
  }

  @ApiOperation({ summary: "All Avto" })
  @Get()
  findAll() {
    return this.avtoService.findAll();
  }

  @ApiOperation({ summary: "Findone Avto" })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.avtoService.findOne(+id);
  }

  @ApiOperation({ summary: "Update Avto" })
  @Patch(":id")
  update(@Param("id") id: string, @Body() updateAvtoDto: UpdateAvtoDto) {
    return this.avtoService.update(+id, updateAvtoDto);
  }

  @ApiOperation({ summary: "Delete Avto" })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.avtoService.delete(+id);
  }
}
