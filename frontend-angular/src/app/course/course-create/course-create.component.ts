import { Component } from '@angular/core';
import { CourseService } from '../../services/course.service';
import { Course } from '../../models/course.model';
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {Router, RouterOutlet} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-course-create',
  templateUrl: './course-create.component.html',
  styleUrls: ['./course-create.component.css'],
  //standalone: true,

})
export class CourseCreateComponent {
  course: Partial<Course> = {
    title: '',
    description: '',
    teacherId: '', // This should be set based on the logged-in user or a selection
  };

  constructor(private courseService: CourseService, private authService: AuthService, private router: Router,private userService: UserService) {
    const currentUser = this.authService.getCurrentUser();
    this.course.teacherId = currentUser.id; // Assuming getCurrentUser() returns the user object with an id
  }

  onSubmit() {
    this.courseService.createCourse(this.course as Course).subscribe(
      (createdCourse) => {
        console.log('Course created successfully', createdCourse);
        this.router.navigate(['/profile', this.authService.getCurrentUser().id]); // Navigate to course detail or other appropriate route
      },
      (error) => {
        console.error('Error creating course', error);
      }
    );
  }
}
