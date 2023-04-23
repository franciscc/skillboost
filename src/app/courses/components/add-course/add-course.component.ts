import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { v4 as uuidv4 } from 'uuid';
import Course from '../../models/course.class';
import { CoursesService } from '../../services/courses.service';
import { NotificationService } from 'src/app/core/services/notification.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent{
  constructor(
    private matDialogRef : MatDialogRef<AddCourseComponent>,
    private _coursesService : CoursesService,
    private _notificationService : NotificationService
  ) {}

  nameControl = new FormControl('', Validators.required);
  descriptionControl = new FormControl('', Validators.required);
  durationInHoursControl = new FormControl('', Validators.required);
  vacanciesControl = new FormControl('', Validators.required);
  priceControl = new FormControl('', Validators.required);

  formGroup = new FormGroup(
    {
      name: this.nameControl,
      description: this.descriptionControl,
      duration: this.durationInHoursControl,
      vacancy: this.vacanciesControl,
      price: this.priceControl,
    }
  )

  onSubmit(): void {
    if (this.formGroup.valid) {
      this.createCourse();
      this.closeDialog();
    }else {
      this._notificationService.SendNotification('Ups! Nice try');
    }
  }
  
  closeDialog(): void {
    this.matDialogRef.close();
  }

  createCourse(): void {
    const id = uuidv4();
    var courseToAdd = new Course(
      id, this.nameControl.value!, 
      this.descriptionControl.value!, 
      Number(this.durationInHoursControl.value!), 
      Number(this.vacanciesControl.value!), 
      Number(this.priceControl.value!)
    );

    this._coursesService.CreateCourse(courseToAdd);
  }
}
