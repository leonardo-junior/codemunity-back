import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common'
import { Prisma } from '@prisma/client'
import { LessonService } from './lesson.service'

@Controller('/lessons')
export class LessonController {
  constructor(private readonly classService: LessonService) {}

  @Post('/')
  create(@Body() createClassDto: Prisma.LessonUncheckedCreateInput) {
    return this.classService.create(createClassDto)
  }

  @Get('/')
  findAll() {
    return this.classService.findAll()
  }

  @Get('/:id')
  findOne(@Param('id') id: string) {
    return this.classService.findOne(id)
  }

  @Put('/:id')
  update(@Param('id') id: string, @Body() data: Prisma.LessonUpdateInput) {
    return this.classService.update(id, data)
  }

  @Delete('/:id')
  remove(@Param('id') id: string) {
    return this.classService.remove(id)
  }
}
