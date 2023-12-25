// lesson.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Lesson } from '../models/lesson.model'; // Adjust the import path as necessary

@Injectable({ providedIn: 'root' })
export class LessonService {
    private apiUrl = 'http://localhost:3000/api'; // Adjust to your API URL

    constructor(private http: HttpClient) {}

    createLesson(lesson: Lesson): Observable<Lesson> {
        return this.http.post<Lesson>(`${this.apiUrl}/lesson`, lesson);
    }

    getLessonById(id: string): Observable<Lesson> {
        return this.http.get<Lesson>(`${this.apiUrl}/lesson/${id}`);
    }

    getAllLessons(): Observable<Lesson[]> {
        return this.http.get<Lesson[]>(`${this.apiUrl}/lessons`);
    }
    // Add methods for any other lesson-related operations
}
