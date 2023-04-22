import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common'
import { Prisma } from '@prisma/client'
import { ClassService } from './class.service'

@Controller('/classes')
export class ClassController {
  constructor(private readonly classService: ClassService) {}

  @Post('/')
  create(@Body() createClassDto: Prisma.ClassUncheckedCreateInput) {
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
  update(@Param('id') id: string, @Body() data: Prisma.ClassUpdateInput) {
    return this.classService.update(id, data)
  }

  @Delete('/:id')
  remove(@Param('id') id: string) {
    return this.classService.remove(id)
  }
}
