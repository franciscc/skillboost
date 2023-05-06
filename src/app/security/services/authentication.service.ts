import { Injectable } from '@angular/core';
import { User } from 'src/app/shared/models/User.class';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  users: User[] = []

    login(username: string, password: string): boolean{
        return this.users.some(x => x.username == username && x.password == password)
    }

    userExist(username: string): boolean{
        console.log(this.users);
        return this.users.some(x => x.username == username)
    }
}
