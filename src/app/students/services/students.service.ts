import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subject, of } from 'rxjs';
import { Student } from 'src/app/shared/models/Student';

export interface IStudentsService {
  GetAllStudents(): Observable<Student[]>,
  GetStudent(): Student,
  CreateStudent(value: Student): void,
  DeleteStudent(value: Student): void,
}

@Injectable({
  providedIn: 'root'
})

export class StudentsService implements IStudentsService, OnInit{

  private mockStudentsData: Student[] = [
    { 
      id: '2d0a3758-8c53-4471-85cb-c20b0e08d8c2', 
      firstName: 'Francisco', 
      lastName: 'Viola', 
      dni: 39950404, 
      mail: 'franciscoviola22@gmail.com', 
      phoneNumber: '2395203'
    },
    { 
      id: '6d0a6307-8c53-4471-83ob-c20b0e08d8c2', 
      firstName: 'Victoria', 
      lastName: 'Paz', 
      dni: 41782930, 
      mail: 'vickipaz@gmail.com', 
      phoneNumber: '31940310'
    },
    { 
      id: '6d0a6307-8c53-4471-85cb-c20b0e081294', 
      firstName: 'Andrea', 
      lastName: 'Paz', 
      dni: 42235993, 
      mail: 'andrewp@gmail.com', 
      phoneNumber: '12481909'
    }
  ];

  private datasource$ = new BehaviorSubject<Student[]>(this.mockStudentsData);

  constructor() { }
  ngOnInit(): void {
  }

  GetAllStudents(): Observable<Student[]> {
    return this.datasource$.asObservable();
  }

  GetStudent(): Student {
    throw new Error('Method not implemented.');
  }

  CreateStudent(value: Student): void {
    const updatedList = [...this.datasource$.value, value];
    this.datasource$.next(updatedList);
  }

  UpdateStudent(student: Student): void {
    const i = this.datasource$.value.findIndex(x => x.id === student.id);
    if (i !== -1) {
      this.datasource$.value[i] = {
        ...this.datasource$.value[i],
        ...student
      };
    }
    this.datasource$.next([...this.datasource$.value]);
  }

  DeleteStudent(value: Student): void {
    const index = this.datasource$.value.indexOf(value);  
    if (index > -1) {
      var updatedList = this.datasource$.value.filter(x => x.id != value.id);
      this.datasource$.next(updatedList);
    }
  }

}
