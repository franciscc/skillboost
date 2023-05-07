import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizationComponent } from './security/components/authorization/authorization.component';
import { DashboardComponent } from './dashboard/components/dashboard.component';
import { AuthGuard } from './security/guards/auth.guard';

const routes: Routes = [
  {
    path: '', 
    redirectTo: 'authorization/login',
    pathMatch: 'full'
  },
  {
    path: 'authorization',
    component: AuthorizationComponent,
    loadChildren: () => import('./security/security.module').then((m) => m.SecurityModule)
  },
  {
    path: 'dashboard',
    // canActivate: [AuthGuard],
    component: DashboardComponent,
    loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule)
  },
  // {
  //   path: '**',
  //   redirectTo: 'authorization',
  //   pathMatch:'full'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
