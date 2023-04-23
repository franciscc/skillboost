import { Injectable } from '@angular/core';
import Course from '../models/course.class';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor() { }

  dataSource: Course[] = [
    {id: '12849021', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus pariatur a dolor perferendis mollitia eaque molestiae. Expedita, magni quasi ipsam, sit ex laborum at deleniti unde, eveniet soluta temporibus! Illum odit enim vero vel accusamus, praesentium explicabo itaque placeat non.' ,name: 'Angular', durationInHours: 20, vacancies: 10, price : 4000},
    {id: '56346765', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus pariatur a dolor perferendis mollitia eaque molestiae. Expedita, magni quasi ipsam, sit ex laborum at deleniti unde, eveniet soluta temporibus! Illum odit enim vero vel accusamus, praesentium explicabo itaque placeat non.' ,name: 'React', durationInHours: 20, vacancies: 3 , price : 4000},
    {id: '25436345', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus pariatur a dolor perferendis mollitia eaque molestiae. Expedita, magni quasi ipsam, sit ex laborum at deleniti unde, eveniet soluta temporibus! Illum odit enim vero vel accusamus, praesentium explicabo itaque placeat non.' ,name: 'WordPress', durationInHours: 20, vacancies: 5 , price : 4000},
    {id: '11123445', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus pariatur a dolor perferendis mollitia eaque molestiae. Expedita, magni quasi ipsam, sit ex laborum at deleniti unde, eveniet soluta temporibus! Illum odit enim vero vel accusamus, praesentium explicabo itaque placeat non.' ,name: '.NET', durationInHours: 72, vacancies: 1 , price : 4000},
    {id: '11123445', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus pariatur a dolor perferendis mollitia eaque molestiae. Expedita, magni quasi ipsam, sit ex laborum at deleniti unde, eveniet soluta temporibus! Illum odit enim vero vel accusamus, praesentium explicabo itaque placeat non.' ,name: 'Pentesting for beginners', durationInHours: 72, vacancies: 1 , price : 4000},
  ]

  private obs$ = new BehaviorSubject<Course[]>(this.dataSource);

  GetAllCourses(): Observable<Course[]> {
    return this.obs$.asObservable();
  }

  CreateCourse(course : Course) {
    const updatedList = [...this.dataSource, course];
    this.obs$.next(updatedList);
  }
}
