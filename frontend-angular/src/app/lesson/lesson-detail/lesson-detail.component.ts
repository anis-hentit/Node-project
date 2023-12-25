// lesson-detail.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LessonService } from '../../services/lesson.service';
import { CourseService } from '../../services/course.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-lesson-detail',
  templateUrl: './lesson-detail.component.html',
  styleUrls: ['./lesson-detail.component.css'],
})
export class LessonDetailComponent implements OnInit {
  lesson: any; // Replace with proper type
  course: any; // Replace with proper type
  teacher: any; // Replace with proper type

  constructor(
      private lessonService: LessonService,
      private courseService: CourseService,
      private userService: UserService,
      private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const lessonId = this.route.snapshot.paramMap.get('id');
    if (lessonId) {
      this.lessonService.getLessonById(lessonId).subscribe(
          (lessonData) => {
            this.lesson = lessonData;
            this.fetchCourseDetails(lessonData.courseId);
          },
          (error) => console.error('Error fetching lesson details', error)
      );
    }
  }

  fetchCourseDetails(courseId: string) {
    this.courseService.getCourseById(courseId).subscribe(
        (courseData) => {
          this.course = courseData;
          this.fetchTeacherDetails(courseData.teacherId);
        },
        (error) => console.error('Error fetching course details', error)
    );
  }

  fetchTeacherDetails(teacherId: string) {
    this.userService.getUserById(teacherId).subscribe(
        (teacherData) => this.teacher = teacherData,
        (error) => console.error('Error fetching teacher details', error)
    );
  }
}
