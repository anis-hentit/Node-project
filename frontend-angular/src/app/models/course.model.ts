import { Lesson } from './lesson.model';

export interface Course {
    id: string;
    title: string;
    description: string;
    teacherId: string;
    lessons: Lesson[];
}
