export interface User {
    id: string;
    username: string;
    password: string;
    role: 'student' | 'teacher';
    enrolledCourses?: string[]; // For students
}

export const users: Record<string, User> = {};
