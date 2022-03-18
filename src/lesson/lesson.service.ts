import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Lesson } from './lesson.entity';
import { Repository } from 'typeorm';
import { CreateLessonDto } from './dto/create-lesson.dto';
import { v4 as uuid } from 'uuid';

@Injectable()
export class LessonService {
    constructor(@InjectRepository(Lesson) private lessonRepository: Repository<Lesson>) { }

    async createLesson(createLessonDTO: CreateLessonDto): Promise<Lesson> {
        const { name, startDate, endDate } = createLessonDTO;
        const lesson = this.lessonRepository.create({
            id: uuid(),
            name,
            startDate,
            endDate
        })
        return this.lessonRepository.save(lesson);
    }

}
