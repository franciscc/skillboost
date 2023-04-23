import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesHomeComponent } from './components/courses-home/courses-home.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    CoursesHomeComponent,
    CoursesListComponent,
    AddCourseComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDialogModule,
  ],
  exports: [
  ]
})
export class CoursesModule { }
