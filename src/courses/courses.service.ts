import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(Course)
    private coursesRepository: Repository<Course>,
  ) {}

  create(createCourseDto: CreateCourseDto) {
    return this.coursesRepository.save(createCourseDto);
  }

  findAll(): Promise<Course[]> {
    return this.coursesRepository.find();
  }

  findOne(id: number): Promise<Course> {
    return this.coursesRepository.findOneBy({ id });
  }

  update(id: number, updateCourseDto: UpdateCourseDto) {
    return this.coursesRepository.update(id, updateCourseDto);
  }

  async remove(id: number): Promise<UpdateCourseDto> {
    const removedDate = this.coursesRepository.findOneBy({ id });
    await this.coursesRepository.delete(id);
    // search if it's really correct, maybe not if it's wrong
    return removedDate;
  }
}
