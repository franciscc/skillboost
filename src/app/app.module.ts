import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { StudentsModule } from './students/students.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoursesModule } from './courses/courses.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    SharedModule,
    StudentsModule,
    BrowserAnimationsModule,
    CoursesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
