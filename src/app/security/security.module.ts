import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AuthorizationComponent } from './components/authorization/authorization.component';
import { RouterModule } from '@angular/router';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    LoginComponent,
    AuthorizationComponent,
    CreateAccountComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    RouterModule.forChild([
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'create-account',
        component: CreateAccountComponent
      }
    ])
  ],
  exports: [
    LoginComponent
  ],
})
export class SecurityModule { }
