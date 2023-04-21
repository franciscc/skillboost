import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsHomeComponent } from './students/components/students-home/students-home.component';
import { CoursesHomeComponent } from './courses/components/courses-home/courses-home.component';


const routes: Routes = [
  {path: 'students', component: StudentsHomeComponent},
  {path: 'courses', component: CoursesHomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
