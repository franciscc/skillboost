import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import Course from '../../models/course.class';
import { NotificationService } from 'src/app/core/services/notification.service';

@Component({
  selector: 'app-my-courses-details',
  templateUrl: './my-courses-details.component.html',
  styleUrls: ['./my-courses-details.component.css']
})
export class MyCoursesDetailsComponent implements OnInit{
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Course[],

    private notificationService : NotificationService,
    private dialogRef: MatDialogRef<MyCoursesDetailsComponent>,
  ) {
    console.log(this.data);
  }

  displayedColumns: string[] = ['Course', 'actions']

  ngOnInit(): void {
  }

  unsubscribe(course : Course): void {
    this.notificationService.SendNotification('Coming soon...');
  }

}