import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/security/services/authentication.service';
import { User } from '../../models/User.class';
import { CoursesService } from 'src/app/courses/services/courses.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MyCoursesDetailsComponent } from 'src/app/courses/components/my-courses-details/my-courses-details.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit{
  loggedUser?: User;

  constructor(
    private authService : AuthenticationService,
    private coursesService : CoursesService,
    private dialogRef : MatDialog
  ){}

  ngOnInit(): void {
    this.authService.getLoggedUser().subscribe(x => this.loggedUser = x);
  }

  logOut(): void {
    this.authService.logout();
  }

  viewMyCourses(): void {
    const result = this.coursesService.ViewMyCourses(this.loggedUser?.id!);

    this.dialogRef.open(MyCoursesDetailsComponent, {
      data: result,
      height: 'var(--dialog-form-height)',
      width: 'var(--dialog-form-width)',
    });
  }
}
