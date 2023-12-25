import { Component, OnInit } from '@angular/core';
import { LessonService } from '../../services/lesson.service';
import { CourseService } from '../../services/course.service'; // Import CourseService
import { Lesson } from '../../models/lesson.model';
import { Course } from '../../models/course.model'; // Import Course model

@Component({
  selector: 'app-lesson-create',
  templateUrl: './lesson-create.component.html',
  styleUrls: ['./lesson-create.component.css'],
})
export class LessonCreateComponent implements OnInit {
  lesson: Partial<Lesson> = {
    title: '',
    content: '',
    courseId: '',
  };
  courses: Course[] = []; // To store the list of courses

  constructor(
      private lessonService: LessonService,
      private courseService: CourseService
  ) {}

  ngOnInit() {
    // Fetch the list of courses to populate the dropdown
    this.courseService.getAllCourses().subscribe(
        (courses) => {
          this.courses = courses;
        },
        (error) => console.error('Error fetching courses', error)
    );
  }

  onSubmit() {
    // Ensure a courseId is selected
    if (!this.lesson.courseId) {
      alert('Please select a course');
      return;
    }

    this.lessonService.createLesson(this.lesson as Lesson).subscribe(
        (createdLesson) => {
          console.log('Lesson created successfully', createdLesson);
          // Reset the lesson form
          this.lesson = { title: '', content: '', courseId: '' };
          // Popup message
          alert('Lesson created successfully!');
        },
        (error) => {
          console.error('Error creating lesson', error);
        }
    );
  }
}
