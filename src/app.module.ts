import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ClassesModule } from './class/class.module'
import { CourseSectionsModule } from './course-section/course-section.module'
import { CoursesModule } from './course/course.module'
import { PrismaService } from './prisma.service'

@Module({
  imports: [ClassesModule, CourseSectionsModule, CoursesModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
