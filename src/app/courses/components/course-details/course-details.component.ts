import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Course from '../../models/course.class';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit{
  constructor(
    private router : ActivatedRoute,
    private courseService : CoursesService
  ){}
  
  course?: Course;
  buttonText: string = '';
  isFull: boolean = false;
  
  ngOnInit(): void {
    const id = this.router.snapshot.params['id'];
    this.course = this.courseService.GetById(+id);
    
    if(this.course.vacancies == 0){
      this.buttonText = 'This course is FULL';
      this.isFull = true;
    }else {
      this.buttonText = 'Subscribe NOW!';
    }
  }

}
