import {courses} from "../models/course.model";
import {Lesson} from "../models/lesson.model";
import {lessons} from "../models/lesson.model";
import { v4 as uuidv4 } from 'uuid';
export const createLesson = (title: string, content: string, courseId: string): Lesson => {
    const newLesson: Lesson = { id: uuidv4(), title, content, courseId };
    const course = courses[courseId];
    if (course) {
        course.lessons.push(newLesson);
        lessons[newLesson.id] = newLesson;
        return newLesson;
    } else {
        throw new Error('Course not found');
    }
};

export const getLesson = (lessonId: string): Lesson | null => {
    return lessons[lessonId] || null;
};


export const getAllLessons = () => {
    return Object.values(lessons);
};

