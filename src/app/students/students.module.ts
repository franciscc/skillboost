import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { StudentsListComponent } from './components/students-list/students-list.component';
import { StudentsHomeComponent } from './components/students-home/students-home.component';



@NgModule({
  declarations: [
    AddStudentComponent,
    StudentsListComponent,
    StudentsHomeComponent,
    StudentsHomeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StudentsHomeComponent
  ]
})
export class StudentsModule { }
