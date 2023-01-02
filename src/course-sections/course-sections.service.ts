import { Injectable } from '@nestjs/common';
import { CourseSection, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CourseSectionsService {
  constructor(private prisma: PrismaService) {}

  create(data: Prisma.CourseSectionCreateInput): Promise<CourseSection> {
    return this.prisma.courseSection.create({
      data,
    });
  }

  findAll(): Promise<CourseSection[] | null> {
    const test = this.prisma.courseSection.findMany();
    console.log('🚀 ~ CourseSectionsService ~ findAll ~ test', test);

    return test;
  }

  findOne(id: number): Promise<CourseSection | null> {
    return this.prisma.courseSection.findUnique({
      where: { id },
    });
  }

  update(
    id: number,
    data: Prisma.CourseSectionUpdateInput,
  ): Promise<CourseSection> {
    return this.prisma.courseSection.update({
      where: { id },
      data,
    });
  }

  async remove(id: number): Promise<CourseSection> {
    return this.prisma.courseSection.delete({
      where: { id },
    });
  }
}
