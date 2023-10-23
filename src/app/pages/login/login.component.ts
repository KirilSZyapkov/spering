import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm = new FormGroup({
    
    email: new FormControl(''),
    password: new FormControl(''),
    
  });

  onLogin(): void{
    const {email, password} = this.loginForm.controls;
console.log(email.value, password.value);

  }
}
