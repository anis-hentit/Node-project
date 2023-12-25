// profile.component.ts
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import {ActivatedRoute, Router, RouterOutlet} from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user.model';
import {CommonModule} from "@angular/common";
import {CourseService} from "../../services/course.service";
import {Course} from "../../models/course.model";


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  //standalone: true,

})
export class ProfileComponent implements OnInit {
  user: User | null = null;
  enrolledCoursesDetails: Course[] = [];

  constructor(private userService: UserService, private route: ActivatedRoute,
              private authService: AuthService,
              private router: Router,
              private courseService: CourseService,) {}

  ngOnInit() {
    const userId = this.route.snapshot.paramMap.get('id');
    if (userId) {
      this.userService.getUserById(userId).subscribe(
          (userData) => {
            this.user = userData;
            this.fetchEnrolledCoursesDetails();
          },
          (error) => {
            console.error('Error fetching user profile', error);
          }
      );
    }
  }


  fetchEnrolledCoursesDetails() {
    if (this.user && this.user.enrolledCourses) {
      this.user.enrolledCourses.forEach(courseId => {
        this.courseService.getCourseById(courseId).subscribe(
            (courseData) => {
              this.enrolledCoursesDetails.push(courseData);
            },
            (error) => console.error(`Error fetching details for course ${courseId}`, error)
        );
      });
    }
  }
  navigateToLessonList(): void {
    this.router.navigate(['/lessons']);
  }


  navigateToCreateCourse() {
    console.log(this.authService.getCurrentUser())
    if (this.authService.hasRole('teacher')) {
      this.router.navigate(['/create-course']);
    } else {
      alert('Only teachers can create courses.');
    }
  }
  logout(): void {
    this.authService.logout();
    this.router.navigate(['/']); // Navigate to home page after logout
  }

  navigateToCourseList(): void {
    this.router.navigate(['/courses']);
  }

  navigateToCreateLesson(): void {
    if (this.authService.hasRole('teacher')) {
      this.router.navigate(['/create-lesson']);
    } else {
      alert('Only teachers can create lessons.');
    }
  }

}
