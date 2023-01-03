import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common'
import { PrismaService } from '../prisma.service'
import { Class, Prisma } from '@prisma/client'

@Injectable()
export class ClassService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.ClassUncheckedCreateInput): Promise<Class> {
    const courseSection = await this.prisma.courseSection.findUnique({
      where: {
        id: data.courseSectionId,
      },
    })

    if (!courseSection) throw new BadRequestException()

    try {
      return this.prisma.class.create({ data })
    } catch (error) {
      throw new InternalServerErrorException(error)
    }
  }

  async findAll(): Promise<Class[] | null> {
    return this.prisma.class.findMany()
  }

  async findOne(id: number): Promise<Class | null> {
    return this.prisma.class.findUnique({
      where: { id },
    })
  }

  async update(id: number, data: Prisma.ClassUpdateInput): Promise<Class> {
    return this.prisma.class.update({
      data,
      where: { id },
    })
  }

  async remove(id: number): Promise<Class> {
    return this.prisma.class.delete({
      where: { id },
    })
  }
}
