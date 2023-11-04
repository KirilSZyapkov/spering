import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserContextService } from 'src/app/context/user-context.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(
    private userContext: UserContextService,
    private router: Router
  ) {}

  onSubmit(): void {
    const { email, password } = this.loginForm.controls;

    try {
      this.userContext.loading({ email, password });
      this.router.navigate(['/']);
    } catch (error) {
      alert(error.message);
    }
  }
}
