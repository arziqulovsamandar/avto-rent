import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TimeService } from './time.service';
import { CreateTimeDto } from './dto/create-time.dto';
import { UpdateTimeDto } from './dto/update-time.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';


@ApiTags("Time")
@Controller("time")
export class TimeController {
  constructor(private readonly timeService: TimeService) {}

  @ApiOperation({ summary: "Create time" })
  @Post()
  create(@Body() createTimeDto: CreateTimeDto) {
    return this.timeService.create(createTimeDto);
  }

  @ApiOperation({ summary: "all time" })
  @Get()
  findAll() {
    return this.timeService.findAll();
  }

  @ApiOperation({ summary: "Find one time" })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.timeService.findOne(+id);
  }

  @ApiOperation({ summary: "Update time" })
  @Patch(":id")
  update(@Param("id") id: string, @Body() updateTimeDto: UpdateTimeDto) {
    return this.timeService.update(+id, updateTimeDto);
  }

  @ApiOperation({ summary: "Delte time" })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.timeService.delete(+id);
  }
}
