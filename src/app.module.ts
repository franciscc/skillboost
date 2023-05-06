import { NgModule } from '@angular/core';
import { AppComponent } from './app/app.component';
import { SharedModule } from './app/shared/shared.module';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app/app-routing.module';
import { StudentsModule } from './app/students/students.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoursesModule } from './app/courses/courses.module';
import { SecurityModule } from './app/security/security.module';
import { DashboardModule } from './app/dashboard/dashboard.module';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    SharedModule,
    StudentsModule,
    BrowserModule,
    BrowserAnimationsModule,
    CoursesModule,
    SecurityModule,
    DashboardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
