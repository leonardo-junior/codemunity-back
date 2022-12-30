import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateClassDto } from './dto/create-class.dto';
import { UpdateClassDto } from './dto/update-class.dto';
import { Class } from './entities/class.entity';

@Injectable()
export class ClassesService {
  constructor(
    @InjectRepository(Class)
    private classesRepository: Repository<Class>,
  ) {}

  create(createClassDto: CreateClassDto) {
    return this.classesRepository.save(createClassDto);
  }

  findAll() {
    return this.classesRepository.find();
  }

  findOne(id: number) {
    return this.classesRepository.findOneBy({ id });
  }

  update(id: number, updateClassDto: UpdateClassDto) {
    return this.classesRepository.update(id, updateClassDto);
  }

  async remove(id: number) {
    const removedDate = this.classesRepository.findOneBy({ id });
    await this.classesRepository.delete(id);
    return removedDate;
  }
}
