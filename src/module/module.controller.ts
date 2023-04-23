import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common'
import { Module, Prisma } from '@prisma/client'
import { ModuleService } from './module.service'

@Controller('/modules')
export class ModulesController {
  constructor(private readonly courseSectionService: ModuleService) {}

  @Post('/')
  create(@Body() data: Module) {
    return this.courseSectionService.create(data)
  }

  @Get('/')
  findAll() {
    return this.courseSectionService.findAll()
  }

  @Get('/:id')
  findOne(@Param('id') id: string) {
    return this.courseSectionService.findOne(id)
  }

  @Put('/:id')
  update(@Param('id') id: string, @Body() data: Prisma.ModuleUpdateInput) {
    return this.courseSectionService.update(id, data)
  }

  @Delete('/:id')
  remove(@Param('id') id: string) {
    return this.courseSectionService.remove(id)
  }
}
