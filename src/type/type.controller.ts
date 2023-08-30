import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TypeService } from './type.service';
import { CreateTypeDto } from './dto/create-type.dto';
import { UpdateTypeDto } from './dto/update-type.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags("Type")
@Controller("type")
export class TypeController {
  constructor(private readonly typeService: TypeService) {}

  @ApiOperation({ summary: "Create type" })
  @Post()
  create(@Body() createTypeDto: CreateTypeDto) {
    return this.typeService.create(createTypeDto);
  }

  @ApiOperation({ summary: "All type" })
  @Get()
  findAll() {
    return this.typeService.findAll();
  }

  @ApiOperation({ summary: "FindOne type" })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.typeService.findOne(+id);
  }

  @ApiOperation({ summary: "Update type" })
  @Patch(":id")
  update(@Param("id") id: string, @Body() updateTypeDto: UpdateTypeDto) {
    return this.typeService.update(+id, updateTypeDto);
  }

  @ApiOperation({ summary: "Delete type" })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.typeService.remove(+id);
  }
}
