import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AvtoEgasiService } from './avto_egasi.service';
import { CreateAvtoEgasiDto } from './dto/create-avto_egasi.dto';
import { UpdateAvtoEgasiDto } from './dto/update-avto_egasi.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags("Avto-egasi")
@Controller("avto-egasi")
export class AvtoEgasiController {
  constructor(private readonly avtoEgasiService: AvtoEgasiService) {}

  @ApiOperation({ summary: "Create Avto-egasi" })
  @Post()
  create(@Body() createAvtoEgasiDto: CreateAvtoEgasiDto) {
    return this.avtoEgasiService.create(createAvtoEgasiDto);
  }

  @ApiOperation({ summary: "All Avto-egasi" })
  @Get()
  findAll() {
    return this.avtoEgasiService.findAll();
  }

  @ApiOperation({ summary: "Findone Avto-egasi" })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.avtoEgasiService.findOne(+id);
  }

  @ApiOperation({ summary: "Update Avto-egasi" })
  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateAvtoEgasiDto: UpdateAvtoEgasiDto
  ) {
    return this.avtoEgasiService.update(+id, updateAvtoEgasiDto);
  }

  @ApiOperation({ summary: "Delete Avto-egasi" })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.avtoEgasiService.delete(+id);
  }
}
