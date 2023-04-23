import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotificationService } from 'src/app/core/services/notification.service';
import { Student } from 'src/app/shared/models/Student';
import { StudentsService } from 'src/app/students/services/students.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-add-student-form',
  templateUrl: './add-student-form.component.html',
  styleUrls: ['./add-student-form.component.css']
})

export class AddStudentFormComponent implements OnInit{

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Student,

    private matDialogRef : MatDialogRef<AddStudentFormComponent>, 
    private studentsService : StudentsService, 
    private _notificationService : NotificationService
    ) {}
  ngOnInit(): void {
    this.data != null ? this.action = 'Update' : this.action = 'New';
  }

  action : 'Update' | 'New' = 'New';
  nameControl = new FormControl(this.data?.firstName ?? '', Validators.required);
  lastnameControl = new FormControl(this.data?.lastName ?? '', Validators.required);
  dniControl = new FormControl(this.data?.dni ?? '', Validators.required);
  mailControl = new FormControl(this.data?.mail ?? '', [Validators.required, Validators.email]);
  phoneControl = new FormControl(this.data?.phoneNumber ?? '', [Validators.required, Validators.pattern('^\\s*(?:\\+?(\\d{1,3}))?([-. (]*(\\d{3})[-. )]*)?((\\d{3})[-. ]*(\\d{2,4})(?:[-.x ]*(\\d+))?)\\s*$')]);

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

      this.action == 'New' ? this.createStudent() : this.updateStudent();
      
      this.closeDialog();
    }else {
      this._notificationService.SendNotification('Ups! Nice try');
    }
  }

  updateStudent(): void {
    this.data.firstName = this.nameControl.value!;
    this.data.lastName = this.lastnameControl.value!;
    this.data.mail = this.mailControl.value!;
    this.data.dni = this.dniControl.value!;
    this.data.phoneNumber = this.phoneControl.value!;

    this.studentsService.UpdateStudent(this.data);
  }

  createStudent(): void {
    const id = uuidv4();
    var studentToAdd = new Student(
      id, this.nameControl.value!, this.lastnameControl.value!, Number(this.dniControl.value!), this.mailControl.value!, this.phoneControl.value!
    )

    this.studentsService.CreateStudent(studentToAdd)
  }

}
