import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddStudentFormComponent } from '../add-student/add-student-form/add-student-form.component';

@Component({
  selector: 'app-students-home',
  templateUrl: './students-home.component.html',
  styleUrls: ['./students-home.component.css']
})
export class StudentsHomeComponent {
  constructor(private matDialog : MatDialog){}

  openDialog(): void {
    const dialogRef = this.matDialog.open(AddStudentFormComponent,{
      height: 'var(--dialog-form-height)',
      width:  'var(--dialog-form-width)'
    })

  }
}
