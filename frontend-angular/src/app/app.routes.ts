import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { RoleGuard } from './guards/role.guard';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CourseListComponent } from './course/course-list/course-list.component';
import { CourseDetailComponent } from './course/course-detail/course-detail.component';
import { CourseCreateComponent } from './course/course-create/course-create.component';
import { LessonDetailComponent } from './lesson/lesson-detail/lesson-detail.component';
import { LessonCreateComponent } from './lesson/lesson-create/lesson-create.component';
import { ProfileComponent } from './user/profile/profile.component';
import {LessonListComponent} from "./lesson/lesson-list/lesson-list.component";

export const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'courses', component: CourseListComponent },
    { path: 'courses/:id', component: CourseDetailComponent},
    {
        path: 'create-course',
        component: CourseCreateComponent,
        canActivate: [AuthGuard, RoleGuard],
        data: { role: 'teacher' }
    },
    {
        path: 'create-lesson',
        component: LessonCreateComponent,
        canActivate: [AuthGuard, RoleGuard],
        data: { role: 'teacher' }
    },
    { path: 'lessons/:id', component: LessonDetailComponent},
    { path: 'lessons', component: LessonListComponent },
    { path: 'profile/:id', component: ProfileComponent},
    // Redirect any unknown paths to the home page
    { path: '**', redirectTo: '' }
];
