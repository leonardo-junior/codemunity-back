import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common'
import { PrismaService } from '../prisma.service'
import { Lesson, Prisma } from '@prisma/client'

@Injectable()
export class LessonService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.LessonUncheckedCreateInput): Promise<Lesson> {
    const courseSection = await this.prisma.module.findUnique({
      where: { id: data.moduleId },
    })

    if (!courseSection) throw new BadRequestException()

    try {
      return this.prisma.lesson.create({ data })
    } catch (error) {
      throw new InternalServerErrorException(error)
    }
  }

  async findAll(): Promise<Lesson[] | null> {
    return this.prisma.lesson.findMany()
  }

  async findOne(id: string): Promise<Lesson | null> {
    return this.prisma.lesson.findUnique({
      where: { id },
    })
  }

  async update(id: string, data: Prisma.LessonUpdateInput): Promise<Lesson> {
    return this.prisma.lesson.update({
      data,
      where: { id },
    })
  }

  async remove(id: string): Promise<Lesson> {
    return this.prisma.lesson.delete({
      where: { id },
    })
  }
}
