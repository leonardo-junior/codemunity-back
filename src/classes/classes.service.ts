import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { ClassData, Prisma } from '@prisma/client';

@Injectable()
export class ClassesService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.ClassDataCreateInput): Promise<ClassData> {
    return this.prisma.classData.create({
      data,
    });
  }

  async findAll(): Promise<ClassData[] | null> {
    return this.prisma.classData.findMany();
  }

  async findOne(id: number): Promise<ClassData | null> {
    return this.prisma.classData.findUnique({
      where: { id },
    });
  }

  async update(
    id: number,
    data: Prisma.ClassDataUpdateInput,
  ): Promise<ClassData> {
    return this.prisma.classData.update({
      data,
      where: { id },
    });
  }

  async remove(id: number): Promise<ClassData> {
    return this.prisma.classData.delete({
      where: { id },
    });
  }
}
