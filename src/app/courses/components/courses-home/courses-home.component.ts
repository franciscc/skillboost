import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddCourseComponent } from '../add-course/add-course.component';

@Component({
  selector: 'app-courses-home',
  templateUrl: './courses-home.component.html',
  styleUrls: ['./courses-home.component.css']
})
export class CoursesHomeComponent {
  constructor(
    private dialogRef : MatDialog
  ) {}
  
  addCourse(): void {
    this.dialogRef.open(AddCourseComponent, {
      data: null,
      height: 'var(--dialog-form-height)',
      width: 'var(--dialog-form-width)',
    })
  }
}
