import { TestBed } from '@angular/core/testing';
import { CoursesService } from './courses.service';
import Course from '../models/course.class';
import { NotificationService } from 'src/app/core/services/notification.service';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

describe('CourseService', () => {
  let service: CoursesService;
  let notificationService : NotificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
        providers: [
            MatSnackBar
        ]
    });
    service = TestBed.inject(CoursesService);
    notificationService = TestBed.inject(NotificationService);
  });

  it('should return all courses', () => {
    const courses: Course[] = [
      { id: '1', name: 'Course 1', description: 'some description', vacancies: 1,  durationInHours: 20, price: 1000  },
      { id: '2', name: 'Course 2', description: 'some description', vacancies: 1,  durationInHours: 20, price: 1000  },
    ];
    let result: Course[] | undefined;

    spyOn(service['obs$'], 'asObservable').and.returnValue(new Observable((observer) => {
        observer.next(courses);
        observer.complete();
      }));
    
    service.GetAllCourses().subscribe((data) => {
      result = data;
    });

    expect(result).toEqual(courses);
  });

  it('should create a new course', () => {
    const course: Course = { id: '1', name: 'New Course', description: 'some description', vacancies: 1,  durationInHours: 20, price: 1000  };

    service.CreateCourse(course);

    let result: Course[] | undefined;

    spyOn(service['obs$'], 'next').and.callFake((updatedList: Course[]) => {
        result = updatedList;
      });  

    service.GetAllCourses().subscribe((courses) => {
      expect(courses).toContain(course);
    });

    });
});
