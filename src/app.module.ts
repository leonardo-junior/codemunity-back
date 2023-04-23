import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { LessonsModule } from './lesson/lesson.module'
import { ModulesModule } from './module/module.module'
import { CoursesModule } from './course/course.module'
import { PrismaService } from './prisma.service'

@Module({
  imports: [LessonsModule, ModulesModule, CoursesModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
