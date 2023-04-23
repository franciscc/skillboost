import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsListComponent } from './components/students-list/students-list.component';
import { StudentsHomeComponent } from './components/students-home/students-home.component';
import { MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { SharedModule } from '../shared/shared.module';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { AddStudentFormComponent } from './components/add-student/add-student-form/add-student-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    StudentsListComponent,
    StudentsHomeComponent,
    AddStudentFormComponent,
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    BrowserModule,

    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatTooltipModule,
    MatSnackBarModule,

    SharedModule,
  ],
  exports: [
  ]
})
export class StudentsModule { }
