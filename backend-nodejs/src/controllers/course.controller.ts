import {courses} from "../models/course.model";
import {users} from "../models/user.model";
import { v4 as uuidv4 } from 'uuid';
export const createCourse = (title: string, description: string, teacherId: string) => {
    const newCourse = { id: uuidv4(), title, description, teacherId, lessons: [] };
    courses[newCourse.id] = newCourse;
    return newCourse;
};

export const getCourse = (courseId: string) => {
    return courses[courseId] || null;
};


// Add this function in course.controller.js
export const getAllCourses = () => {
    return Object.values(courses);
};
