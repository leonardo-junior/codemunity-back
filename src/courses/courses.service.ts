import { Injectable } from '@nestjs/common';
import { Course, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CoursesService {
  constructor(private prisma: PrismaService) {}

  create(data: Prisma.CourseCreateInput): Promise<Course> {
    return this.prisma.course.create({
      data,
    });
  }

  findAll(): Promise<Course[] | null> {
    return this.prisma.course.findMany();
  }

  findOne(id: number): Promise<Course | null> {
    return this.prisma.course.findUnique({
      where: { id },
    });
  }

  update(
    id: number,
    updateCourseDto: Prisma.CourseUpdateInput,
  ): Promise<Course> {
    return this.prisma.course.update({
      where: { id },
      data: updateCourseDto,
    });
  }

  async remove(id: number): Promise<Prisma.CourseCreateInput> {
    return this.prisma.course.delete({
      where: { id },
    });
  }
}
