import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClassesController } from './classes/classes.controller';
import { ClassesService } from './classes/classes.service';
import { CourseSectionsController } from './course-sections/course-sections.controller';
import { CourseSectionsService } from './course-sections/course-sections.service';
import { CoursesController } from './courses/courses.controller';
import { CoursesService } from './courses/courses.service';
import { PrismaService } from './prisma.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    ClassesController,
    CoursesController,
    CourseSectionsController,
  ],
  providers: [
    AppService,
    PrismaService,
    ClassesService,
    CoursesService,
    CourseSectionsService,
  ],
})
export class AppModule {}
