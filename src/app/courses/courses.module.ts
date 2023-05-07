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
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CoursesHomeComponent,
    CoursesListComponent,
    AddCourseComponent,
    CourseDetailsComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    SharedModule,
    MatDialogModule,
    RouterModule.forChild([
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        component: CoursesListComponent
      },
      {
        path: ':id',
        component: CourseDetailsComponent
      }
    ])
  ],
  exports: [
  ]
})
export class CoursesModule { }
