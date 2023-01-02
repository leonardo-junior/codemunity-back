import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClassesController } from './classes/classes.controller';
import { ClassesService } from './classes/classes.service';
import { CoursesController } from './courses/courses.controller';
import { CoursesService } from './courses/courses.service';
import { PrismaService } from './prisma.service';

@Module({
  imports: [],
  controllers: [AppController, ClassesController, CoursesController],
  providers: [AppService, PrismaService, ClassesService, CoursesService],
})
export class AppModule {}
