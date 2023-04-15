import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Student } from 'src/app/shared/models/Student';
import { StudentsService } from 'src/app/students/services/students.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-add-student-form',
  templateUrl: './add-student-form.component.html',
  styleUrls: ['./add-student-form.component.css']
})
export class AddStudentFormComponent {

  constructor(
    private matDialogRef : MatDialogRef<AddStudentFormComponent>, 
    private studentsService : StudentsService, 
    private _snackBar: MatSnackBar
    ) {}

  nameControl = new FormControl('', Validators.required);
  lastnameControl = new FormControl('', Validators.required);
  dniControl = new FormControl('', Validators.required);
  mailControl = new FormControl('', [Validators.required, Validators.email]);
  phoneControl = new FormControl('', [Validators.required, Validators.pattern('^\\s*(?:\\+?(\\d{1,3}))?([-. (]*(\\d{3})[-. )]*)?((\\d{3})[-. ]*(\\d{2,4})(?:[-.x ]*(\\d+))?)\\s*$')]);

  formGroup = new FormGroup({
    name: this.nameControl,
    lastName: this.lastnameControl,
    dni: this.dniControl,
    mail: this.mailControl,
    phone: this.phoneControl
  })

  closeDialog(): void {
    this.matDialogRef.close();
  }
  
  onSubmit(): void {
    if (this.formGroup.valid) {
      const id = uuidv4();
      var studentToAdd = new Student(
        id, this.nameControl.value!, this.lastnameControl.value!, Number(this.dniControl.value!), this.mailControl.value!, this.phoneControl.value!
      )

      this.studentsService.CreateStudent(studentToAdd)
      this.closeDialog();
    }else {
      this._snackBar.open('Ups! Nice try', 'Close')
    }
  }

}
