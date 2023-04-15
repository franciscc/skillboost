import { Component, OnDestroy, OnInit } from '@angular/core';
import { Student } from 'src/app/shared/models/Student';
import { StudentsService } from '../../services/students.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})

export class StudentsListComponent implements OnInit, OnDestroy{

  subscription: Subscription | null = null;
  constructor(private studentsService : StudentsService) {}

  ngOnInit(): void {
    this.subscription = this.studentsService.GetAllStudents().subscribe(result => this.studentsList = result);
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  deleteStudent(student: Student): void {
    this.studentsService.DeleteStudent(student);
  }

  displayedColumns: string[] = ['fullName', 'dni', 'mail', 'phoneNumber', 'delete']
  studentsList: Student[] = [];

 }