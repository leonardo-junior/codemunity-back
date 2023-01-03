import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common'
import { CourseSection, Prisma } from '@prisma/client'
import { CourseSectionService } from './course-section.service'

@Controller('/course-sections')
export class CourseSectionsController {
  constructor(private readonly courseSectionService: CourseSectionService) {}

  @Post('/')
  create(@Body() data: CourseSection) {
    return this.courseSectionService.create(data)
  }

  @Get('/')
  findAll() {
    return this.courseSectionService.findAll()
  }

  @Get('/:id')
  findOne(@Param('id') id: string) {
    return this.courseSectionService.findOne(+id)
  }

  @Put('/:id')
  update(
    @Param('id') id: string,
    @Body() data: Prisma.CourseSectionUpdateInput,
  ) {
    return this.courseSectionService.update(+id, data)
  }

  @Delete('/:id')
  remove(@Param('id') id: string) {
    return this.courseSectionService.remove(+id)
  }
}
