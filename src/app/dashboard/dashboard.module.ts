import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { StudentsHomeComponent } from '../students/components/students-home/students-home.component';
import { CoursesHomeComponent } from '../courses/components/courses-home/courses-home.component';



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: 'students', 
        component: StudentsHomeComponent
      },
      {
        path: 'courses', 
        component: CoursesHomeComponent,
        loadChildren: () => import('../courses/courses.module').then((m) => m.CoursesModule)
      },
    ]),
  ]
})
export class DashboardModule { }
