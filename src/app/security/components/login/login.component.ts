import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  testUser: string = "coderhouse@coderhouse.com";
  testPass: string = "Abc12345!";
  userNotExists: boolean = false;
  constructor(private authenticationService: AuthenticationService, private router: Router) {
  }

  ngOnInit(): void {
    this.authenticationService.logout();
  }

  loginTitle = "login"

  username = new FormControl(this.testUser,
    [Validators.email, Validators.minLength(2), Validators.required]
  );
  password = new FormControl(this.testPass,
    [Validators.required, Validators.minLength(2)]
  );

  loginForm = new FormGroup({
    username: this.username,
    password: this.password
  });

  onSubmit(): void {
    if (this.loginForm.valid) {
      let userExists = this.authenticationService.login(this.username.value!, this.password.value!);
      if (!userExists) {
        this.userNotExists = true;
      }
    }

  }

  getUsernameErrorMessage(): string {
    return 'Invalid email'
  }

}
