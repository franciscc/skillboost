import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    MatSnackBarModule,
    SharedModule
  ]
})
export class CoreModule { }
