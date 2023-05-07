import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from 'src/app/shared/models/User.class';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private router : Router) { }

  loggedUser!: User; 
  users: User[] = [
    {id: 1, password: 'Abc12345!', username: 'coderhouse@coderhouse.com'}
  ]

  private userObs$ = new BehaviorSubject<User>(this.loggedUser);
 
    login(username: string, password: string): boolean{
        if(this.users.some(x => x.username == username && x.password == password)){

          const user = {
            id: 123,
            username: username,
            password: password
          };

          this.userObs$.next(user);
          localStorage.setItem('authUser', JSON.stringify(user));
          this.router.navigate(['dashboard']);
          
          return true;
        }
        return false;
    }

    userExist(username: string): boolean{
        return this.users.some(x => x.username == username)
    }

    getLoggedUser(): Observable<User> {
      const user = JSON.parse(localStorage.getItem('authUser')!);
      if(user && user !== 'undefined'){
        this.userObs$.next(user);
      }

      return this.userObs$.asObservable();
    }

    logout(): void {
      localStorage.removeItem('authUser');
      this.userObs$.next(null!);
      this.router.navigate(['authorization']);
    }
}
