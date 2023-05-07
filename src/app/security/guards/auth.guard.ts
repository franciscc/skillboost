import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, map } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authenticationService : AuthenticationService,
    private router : Router
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      const user = JSON.parse(localStorage.getItem('authUser')!);
      if(user && user !== 'undefined'){
        return true;
      }
      
      return this.authenticationService.getLoggedUser()
        .pipe(
          map((loggedUser) => {
            return !loggedUser ? this.router.createUrlTree(['authorization', 'login']) : true;
          })
        )
  }
}
