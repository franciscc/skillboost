import { Component } from '@angular/core';
import Course from '../../models/course.class';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent {
  dataSource: Course[] = [
    {id: '12849021', description: 'random description' ,name: 'Angular', durationInHours: 20, vacancies: 10, price : 4000},
    {id: '56346765', description: 'random description' ,name: 'React', durationInHours: 20, vacancies: 3 , price : 4000},
    {id: '25436345', description: 'random description' ,name: 'WordPress', durationInHours: 20, vacancies: 5 , price : 4000},
    {id: '11123445', description: 'random description' ,name: '.NET', durationInHours: 72, vacancies: 1 , price : 4000},
    {id: '11123445', description: 'random description' ,name: 'Pentesting for beginners', durationInHours: 72, vacancies: 1 , price : 4000},
  ]
}
