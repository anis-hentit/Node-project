import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/course.service';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service'; // Add this
import { Course } from '../../models/course.model';  // Adjust the import path as necessary
import { User } from '../../models/user.model';     // Adjust the import path as necessary

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html',
    styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
    courses: any[] = [];  // Replace 'any' with 'Course' if you have a Course model

    constructor(
        private courseService: CourseService,
        private userService: UserService,
        public authService: AuthService // Add this
    ) {}

    ngOnInit() {
        this.courseService.getAllCourses().subscribe(
            (courseData) => {
                this.courses = courseData;
                this.courses.forEach(course => {
                    this.fetchTeacherDetails(course);
                });
            },
            (error) => console.error('Error fetching courses', error)
        );
    }

    fetchTeacherDetails(course: any) { // Replace 'any' with 'Course' if you have a Course model
        this.userService.getUserById(course.teacherId).subscribe(
            (teacherData: User) => {
                course.teacher = teacherData;  // Add the teacher data to the course object
            },
            (error) => console.error('Error fetching teacher details', error)
        );
    }

    enrollInCourse(courseId: string) {
        const currentUser = this.authService.getCurrentUser();
        if (currentUser && currentUser.role === 'student') {
            // Check if the user is already enrolled in the course
            if (currentUser.enrolledCourses && currentUser.enrolledCourses.includes(courseId)) {
                alert('You are already enrolled in this course.');
                return;
            }
            // Add courseId to the user's enrolled courses
            const updatedUser = {
                ...currentUser,
                enrolledCourses: [...(currentUser.enrolledCourses || []), courseId]
            };
            this.userService.updateUser(currentUser.id, updatedUser).subscribe(
                () => {
                    alert('Enrolled successfully!');
                    // You may want to refresh the user's data or update the local state to reflect the new enrollment
                },
                error => {
                    console.error('Error enrolling in course', error);
                    // Handle error
                }
            );
        } else {
            alert('Only students can enroll in courses.');
        }
    }
}
