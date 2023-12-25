import { users } from '../models/user.model';
import { courses } from '../models/course.model';
import { User } from '../models/user.model';

export const enrollInCourse = (userId: string, courseId: string): void => {
    const user = users[userId];
    const course = courses[courseId];

    if (user && course) {
        if (!user.enrolledCourses) {
            user.enrolledCourses = [];
        }
        user.enrolledCourses.push(courseId);
    } else {
        throw new Error('User or Course not found');
    }
};

export const getUserById = (userId: string) => {
    const user = users[userId];
    if (!user) {
        throw new Error('User not found');
    }
    return user;
};

export const getUserByUsername = (username: string) => {
    const user = Object.values(users).find(user => user.username === username);
    if (!user) {
        throw new Error('User not found');
    }
    return user;
};

export const getAllUsers = () => {
    return Object.values(users);
};

export const updateUser = (userId: string, updateData: Partial<User>) => {
    if (!users[userId]) {
        throw new Error('User not found');
    }
    users[userId] = { ...users[userId], ...updateData };
    return users[userId];
};


export const getEnrolledCourses = (userId: string) => {
    const user = users[userId];
    if (!user || !user.enrolledCourses) {
        throw new Error('User not found or not enrolled in any courses');
    }
    return user.enrolledCourses.map(courseId => courses[courseId]);
};
