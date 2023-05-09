import { Injectable } from '@angular/core';
import Course from '../models/course.class';
import { BehaviorSubject, Observable, map } from 'rxjs';
import CourseStudent from '../models/courseStudent.class';
import { NotificationService } from 'src/app/core/services/notification.service';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(
    private notificationService : NotificationService
  ) { }

  dataSource: Course[] = [
    {id: '12849021', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus pariatur a dolor perferendis mollitia eaque molestiae. Expedita, magni quasi ipsam, sit ex laborum at deleniti unde, eveniet soluta temporibus! Illum odit enim vero vel accusamus, praesentium explicabo itaque placeat non.' ,name: 'Angular', durationInHours: 20, vacancies: 10, price : 4000},
    {id: '56346765', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus pariatur a dolor perferendis mollitia eaque molestiae. Expedita, magni quasi ipsam, sit ex laborum at deleniti unde, eveniet soluta temporibus! Illum odit enim vero vel accusamus, praesentium explicabo itaque placeat non.' ,name: 'React', durationInHours: 20, vacancies: 0 , price : 5000},
    {id: '25436345', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus pariatur a dolor perferendis mollitia eaque molestiae. Expedita, magni quasi ipsam, sit ex laborum at deleniti unde, eveniet soluta temporibus! Illum odit enim vero vel accusamus, praesentium explicabo itaque placeat non.' ,name: 'WordPress', durationInHours: 20, vacancies: 5 , price : 6500},
    {id: '11123445', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus pariatur a dolor perferendis mollitia eaque molestiae. Expedita, magni quasi ipsam, sit ex laborum at deleniti unde, eveniet soluta temporibus! Illum odit enim vero vel accusamus, praesentium explicabo itaque placeat non.' ,name: '.NET', durationInHours: 72, vacancies: 0 , price : 9000},
    {id: '37723292', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus pariatur a dolor perferendis mollitia eaque molestiae. Expedita, magni quasi ipsam, sit ex laborum at deleniti unde, eveniet soluta temporibus! Illum odit enim vero vel accusamus, praesentium explicabo itaque placeat non.' ,name: 'Pentesting for beginners', durationInHours: 72, vacancies: 1 , price : 10000},
  ]

  coursesStudents: CourseStudent [] = [
    {userId: '2d0a3758-8c53-1929-85cb-c20b0e08d8c2', courseId: '56346765'},
    {userId: '6d0a6307-8c53-4471-83ob-c20b0e08d8c2', courseId: '25436345'},
  ];

  private obs$ = new BehaviorSubject<Course[]>(this.dataSource);

  GetAllCourses(): Observable<Course[]> {
    return this.obs$.asObservable();
  }

  CreateCourse(course : Course) {
    const updatedList = [...this.dataSource, course];

    this.obs$.next(updatedList);
  }

  GetById(id : number) : Course {
    return this.dataSource.find(x => +x.id == id)!;
  }

  SubscribeToCourse(userId : string, courseId: string): void {

    const userCourses = this.ViewMyCourses(userId);
    const exists = userCourses
      .filter(x => x?.id == courseId).length > 0;

    if(exists) {
      this.notificationService.SendNotification('You are already subscribed to this course');
      return;
    }

    const userToAdd = new CourseStudent(userId, courseId);
    
    this.coursesStudents.push(userToAdd);

    this.dataSource
      .filter(x => x.id == courseId)
      .map(x => {
        x.vacancies--;
      });

      this.notificationService.SendNotification('Enrollment succesfully done!');

  };

  ViewMyCourses(userId : string) : (Course | undefined)[] {
    const result = this.coursesStudents
      .filter(x => x.userId == userId)
      .map(s => this.dataSource.find(t => s.courseId == t.id));

    return result;
  }
}
