import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { routes } from './app.routes'; // Update the import path as necessary
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
import {CommonModule} from "@angular/common";
import {LessonListComponent} from "./lesson/lesson-list/lesson-list.component";
import {NavbarComponent} from "./navbar/navbar.component";
// Import other components and services as necessary

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomePageComponent,
    CourseListComponent,
    CourseDetailComponent,
    CourseCreateComponent,
    LessonDetailComponent,
    LessonCreateComponent,
    ProfileComponent,
    LessonListComponent,
    NavbarComponent,
    // Add other components here
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes) // Make sure routes are set up correctly
  ],
  providers: [
    // Add other services here if they are not provided in 'root'
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
