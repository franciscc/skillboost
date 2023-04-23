import { Component, OnInit } from '@angular/core';
import Course from '../../models/course.class';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { CoursesService } from '../../services/courses.service';
import { NotificationService } from 'src/app/core/services/notification.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {
  dataSource: Course[] = [];
  
  constructor(
    private _courseService : CoursesService,
    private _notificationService : NotificationService
  ) {}
  ngOnInit(): void {
    this._courseService.GetAllCourses().subscribe(x => this.dataSource = x);
  }

  openCourse(): void {
    this._notificationService.SendNotification('Coming soon...');
  }
}
