import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CompaniyaService } from './companiya.service';
import { CreateCompaniyaDto } from './dto/create-companiya.dto';
import { UpdateCompaniyaDto } from './dto/update-companiya.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags("Companiya")
@Controller("companiya")
export class CompaniyaController {
  constructor(private readonly companiyaService: CompaniyaService) {}

  @ApiOperation({ summary: "Create companiya" })
  @Post()
  create(@Body() createCompaniyaDto: CreateCompaniyaDto) {
    return this.companiyaService.create(createCompaniyaDto);
  }

  @ApiOperation({ summary: "All Companiya" })
  @Get()
  findAll() {
    return this.companiyaService.findAll();
  }

  @ApiOperation({ summary: "Id search Companiya" })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.companiyaService.findOne(+id);
  }

  @ApiOperation({ summary: "Update companiya" })
  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateCompaniyaDto: UpdateCompaniyaDto
  ) {
    return this.companiyaService.update(+id, updateCompaniyaDto);
  }

  @ApiOperation({ summary: "Delete companiya" })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.companiyaService.delete(+id);
  }
}
