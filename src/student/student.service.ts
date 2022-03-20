import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, In } from 'typeorm';
import { Student } from './student.entity';
import { CreateStudentInput } from './create-student.input';
import { v4 as uuid } from 'uuid'

@Injectable()
export class StudentService {
    constructor(@InjectRepository(Student) private studentRepository: Repository<Student>) { }

    async createStudent(createStudentInput: CreateStudentInput): Promise<Student> {
        const { firstName, lastName } = createStudentInput;

        const student = this.studentRepository.create({
            id: uuid(),
            firstName,
            lastName
        })

        return await this.studentRepository.save(student);

    }

    async getStudent(id: string): Promise<Student> {
        return await this.studentRepository.findOne({ where: { id } })
    }


    async getStudents(): Promise<Student[]> {
        return await this.studentRepository.find();
    }

    async getManyStudents(studentIds: string[]): Promise<Student[]> {
        return await this.studentRepository.find({ where: { id: { $in: studentIds } } });
    }
}
