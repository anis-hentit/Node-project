// course.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../models/course.model'; // Adjust the import path as necessary

@Injectable({ providedIn: 'root' })
export class CourseService {
  private apiUrl = 'http://localhost:3000/api'; // Adjust to your API URL

  constructor(private http: HttpClient) {}

  createCourse(course: Course): Observable<Course> {
    return this.http.post<Course>(`${this.apiUrl}/course`, course);
  }

  getCourseById(id: string): Observable<Course> {
    return this.http.get<Course>(`${this.apiUrl}/course/${id}`);
  }

  getAllCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.apiUrl}/courses`);
  }

  // Add methods for any other course-related operations
}
