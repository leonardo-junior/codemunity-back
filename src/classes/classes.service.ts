import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Renamedclass, Prisma } from '@prisma/client';
import { UpdateClassDto } from './dto/update-class.dto';

@Injectable()
export class ClassesService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.RenamedclassCreateInput): Promise<Renamedclass> {
    return this.prisma.renamedclass.create({
      data,
    });
  }

  async findAll(): Promise<Renamedclass[] | null> {
    return this.prisma.renamedclass.findMany();
  }

  async findOne(id: number): Promise<Renamedclass | null> {
    return this.prisma.renamedclass.findUnique({
      where: { id },
    });
  }

  async update(id: number, data: UpdateClassDto): Promise<Renamedclass> {
    return this.prisma.renamedclass.update({
      data,
      where: { id },
    });
  }

  async remove(id: number): Promise<Renamedclass> {
    return this.prisma.renamedclass.delete({
      where: { id },
    });
  }
}
