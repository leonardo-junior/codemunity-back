import { Injectable } from '@nestjs/common'
import { CourseSection, Prisma } from '@prisma/client'
import { PrismaService } from 'src/prisma.service'

@Injectable()
export class CourseSectionService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.CourseSectionUncheckedCreateInput) {
    const course = await this.prisma.course.findFirst({
      where: { id: data.courseId },
    })

    if (!course) return

    return this.prisma.courseSection.create({ data })
  }

  findAll(): Promise<CourseSection[] | null> {
    return this.prisma.courseSection.findMany({
      include: {
        classes: true,
      },
    })
  }

  findOne(id: number): Promise<CourseSection | null> {
    return this.prisma.courseSection.findUnique({
      where: { id },
    })
  }

  update(
    id: number,
    data: Prisma.CourseSectionUpdateInput,
  ): Promise<CourseSection> {
    return this.prisma.courseSection.update({
      where: { id },
      data,
    })
  }

  async remove(id: number): Promise<CourseSection> {
    return this.prisma.courseSection.delete({
      where: { id },
    })
  }
}
