import { Component, OnDestroy, OnInit } from '@angular/core';
import { Student } from 'src/app/shared/models/Student';
import { StudentsService } from '../../services/students.service';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { AddStudentFormComponent } from '../add-student/add-student-form/add-student-form.component';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})

export class StudentsListComponent implements OnInit, OnDestroy{

  subscription: Subscription | null = null;
 
  constructor(
    private studentsService : StudentsService,
    private matDialog : MatDialog
    ) {}

  ngOnInit(): void {
    this.subscription = this.studentsService.GetAllStudents().subscribe(result => this.studentsList = result);
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  deleteStudent(student: Student): void {
    this.studentsService.DeleteStudent(student);
  }

  editStudent(student: Student): void {
    const dialogRef = this.matDialog.open(AddStudentFormComponent, {
      data : student,
      height: 'var(--dialog-form-height)',
      width: 'var(--dialog-form-width)'
    });
  }

  displayedColumns: string[] = ['fullName', 'dni', 'mail', 'phoneNumber', 'actions']
  studentsList: Student[] = [];

 }