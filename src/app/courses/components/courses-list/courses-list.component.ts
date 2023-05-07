import { Component, OnInit } from '@angular/core';
import Course from '../../models/course.class';
import { CoursesService } from '../../services/courses.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {
  dataSource: Course[] = [];
  
  constructor(
    private _courseService : CoursesService,
    private _notificationService : NotificationService,
    private router : Router,
  ) {}
  ngOnInit(): void {
    this._courseService.GetAllCourses().subscribe(x => this.dataSource = x);
  }

  openCourse(id : number): void {
    this.router.navigate(['dashboard/courses/', id]);
  }
}
