import { Component, OnInit } from '@angular/core';
import { LessonService } from '../../services/lesson.service';
import { Lesson } from '../../models/lesson.model';

@Component({
  selector: 'app-lesson-list',
  templateUrl: './lesson-list.component.html',
  styleUrls: ['./lesson-list.component.css']
})
export class LessonListComponent implements OnInit {
  lessons: Lesson[] = [];

  constructor(private lessonService: LessonService) {}

  ngOnInit(): void {
    this.lessonService.getAllLessons().subscribe(
        (lessons: Lesson[]) => {
          this.lessons = lessons;
        },
        (error: any) => {
          console.error('Error fetching lessons', error);
        }
    );
  }
}
