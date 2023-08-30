import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AvtoIjaraService } from './avto_ijara.service';
import { CreateAvtoIjaraDto } from './dto/create-avto_ijara.dto';
import { UpdateAvtoIjaraDto } from './dto/update-avto_ijara.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags("Avto_ijara")
@Controller("avto-ijara")
export class AvtoIjaraController {
  constructor(private readonly avtoIjaraService: AvtoIjaraService) {}

  @ApiOperation({ summary: "create Avto-ijara" })
  @Post()
  create(@Body() createAvtoIjaraDto: CreateAvtoIjaraDto) {
    return this.avtoIjaraService.create(createAvtoIjaraDto);
  }

  @ApiOperation({ summary: "all Avto-ijara" })
  @Get()
  findAll() {
    return this.avtoIjaraService.findAll();
  }

  @ApiOperation({ summary: "findONe Avto-ijara" })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.avtoIjaraService.findOne(+id);
  }

  @ApiOperation({ summary: "Update Avto-ijara" })
  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateAvtoIjaraDto: UpdateAvtoIjaraDto
  ) {
    return this.avtoIjaraService.update(+id, updateAvtoIjaraDto);
  }

  @ApiOperation({ summary: "Delete Avto-ijara" })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.avtoIjaraService.delete(+id);
  }
}
