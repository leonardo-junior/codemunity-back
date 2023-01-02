import { Module } from '@nestjs/common'
import { CourseSectionService } from './course-section.service'
import { CourseSectionsController } from './course-section.controller'
import { PrismaService } from 'src/prisma.service'

@Module({
  controllers: [CourseSectionsController],
  providers: [CourseSectionService, PrismaService],
})
export class CourseSectionsModule {}
