import { Component, OnInit } from '@angular/core';
import { AuthorizationComponent } from 'src/app/security/components/authorization/authorization.component';
import { AuthenticationService } from 'src/app/security/services/authentication.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit{
  loggedUser: string = '';
  constructor(
    private authService : AuthenticationService
  ){}
  ngOnInit(): void {
    this.authService.getLoggedUser().subscribe(x => this.loggedUser = x.username);
  }

  logOut(): void {
    this.authService.logout();
  }

  openCourses(): void {
    
  }
}
