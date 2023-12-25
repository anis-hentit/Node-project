// course-detail.component.ts
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, RouterOutlet} from '@angular/router';
import { CourseService } from '../../services/course.service';
import {CommonModule} from "@angular/common";
import {UserService} from "../../services/user.service";
import {User} from "../../models/user.model";

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css'],
 //standalone: true,

})
export class CourseDetailComponent implements OnInit {
  course: any;
  teacher: User | null = null;
  constructor(
      private courseService: CourseService,
      private route: ActivatedRoute,
      private userService: UserService
  ) {}

  ngOnInit() {
    const courseId = this.route.snapshot.paramMap.get('id');
    if (courseId) {
      this.courseService.getCourseById(courseId).subscribe(
          (courseData: any) => {
            this.course = courseData;
            console.log(courseData)
            this.fetchTeacherDetails(courseData.teacherId);
          },
          (error: any) => {
            console.error('Error fetching course details', error);
          }
      );
    }
  }

    fetchTeacherDetails(teacherId: string) {
        this.userService.getUserById(teacherId).subscribe(
            (teacherData) => {
                this.teacher = teacherData;
            },
            (error) => console.error('Error fetching teacher details', error)
        );
    }
}
