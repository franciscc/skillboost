import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsHomeComponent } from './students/components/students-home/students-home.component';

const routes: Routes = [
  {path: 'students', component: StudentsHomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
