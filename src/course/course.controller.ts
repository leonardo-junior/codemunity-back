import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common'
import { Prisma } from '@prisma/client'
import { CourseService } from './course.service'

@Controller('/courses')
export class CoursesController {
  constructor(private readonly coursesService: CourseService) {}

  @Post('/')
  create(@Body() data: Prisma.CourseCreateInput) {
    return this.coursesService.create(data)
  }

  @Get('/')
  findAll() {
    return this.coursesService.findAll()
  }

  @Get('/:id')
  findOne(@Param('id') id: string) {
    return this.coursesService.findOne(id)
  }

  @Put('/:id')
  update(@Param('id') id: string, @Body() data: Prisma.CourseUpdateInput) {
    return this.coursesService.update(id, data)
  }

  @Delete('/:id')
  remove(@Param('id') id: string) {
    return this.coursesService.remove(id)
  }
}
