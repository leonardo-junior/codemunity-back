import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { CourseSectionsService } from './course-sections.service';

@Controller('course/sections')
export class CourseSectionsController {
  constructor(private readonly courseSectionsService: CourseSectionsService) {}

  @Post()
  create(@Body() data: any) {
    return this.courseSectionsService.create(data);
  }

  @Get()
  findAll() {
    return this.courseSectionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.courseSectionsService.findOne(+id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() data: Prisma.CourseSectionUpdateInput,
  ) {
    return this.courseSectionsService.update(+id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.courseSectionsService.remove(+id);
  }
}
