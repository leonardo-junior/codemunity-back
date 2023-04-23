import { Injectable } from '@nestjs/common'
import { Module, Prisma } from '@prisma/client'
import { PrismaService } from 'src/prisma.service'

@Injectable()
export class ModuleService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.ModuleUncheckedCreateInput) {
    const course = await this.prisma.course.findFirst({
      where: { id: data.courseId },
    })

    if (!course) return

    return this.prisma.module.create({ data })
  }

  findAll(): Promise<Module[] | null> {
    return this.prisma.module.findMany({
      include: {
        lessons: true,
      },
    })
  }

  findOne(id: string): Promise<Module | null> {
    return this.prisma.module.findUnique({
      where: { id },
      include: {
        lessons: true,
      },
    })
  }

  update(id: string, data: Prisma.ModuleUpdateInput): Promise<Module> {
    return this.prisma.module.update({
      where: { id },
      data,
    })
  }

  async remove(id: string): Promise<Module> {
    return this.prisma.module.delete({
      where: { id },
    })
  }
}
