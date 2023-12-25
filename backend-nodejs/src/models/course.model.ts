import { Lesson } from './lesson.model';
interface Course {
    id: string;
    title: string;
    description: string;
    teacherId: string;
    lessons: Lesson[];
}

export const courses: Record<string, Course> = {};
