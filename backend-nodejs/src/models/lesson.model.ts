export interface Lesson {
    id: string;
    title: string;
    content: string;
    courseId: string;
}

export const lessons: Record<string, Lesson> = {};
