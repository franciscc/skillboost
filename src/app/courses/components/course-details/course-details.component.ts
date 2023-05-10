import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Course from '../../models/course.class';
import { CoursesService } from '../../services/courses.service';
import { AuthenticationService } from 'src/app/security/services/authentication.service';
import { User } from 'src/app/shared/models/User.class';
import { NotificationService } from 'src/app/core/services/notification.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit{
  constructor(
    private router : ActivatedRoute,
    private courseService : CoursesService,
    private authService : AuthenticationService,
  ){}
  
  course?: Course;
  buttonText: string = '';
  isFull: boolean = false;
  loggedUser?: User;

  ngOnInit(): void {
    const id = this.router.snapshot.params['id'];
    this.course = this.courseService.GetById(+id);
    
    if(this.course.vacancies == 0){
      this.buttonText = 'This course is FULL';
      this.isFull = true;
    }else {
      this.buttonText = 'Subscribe NOW!';
    }

    // get logged user
    this.authService.getLoggedUser().subscribe(x => this.loggedUser = x);
  }

  subscribe(): void {
    this.courseService.SubscribeToCourse(this.loggedUser?.id!, this.course?.id!);
  }

}
