import { Module } from '@nestjs/common';
import { CourseSectionsService } from './course-sections.service';
import { CourseSectionsController } from './course-sections.controller';

@Module({
  providers: [CourseSectionsService],
  controllers: [CourseSectionsController],
})
export class CourseSectionsModule {}
