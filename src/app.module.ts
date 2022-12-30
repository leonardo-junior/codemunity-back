import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { CoursesModule } from './courses/courses.module';
import { ClassesModule } from './classes/classes.module';
import { Course } from './courses/entities/course.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5832,
      username: 'postgres',
      password: '1234',
      database: 'postgres',
      entities: [Course],
      synchronize: true,
      autoLoadEntities: true,
    }),
    CoursesModule,
    ClassesModule,
  ],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
