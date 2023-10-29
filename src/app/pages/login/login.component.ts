import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UseLocalStorageService } from 'src/app/service/use-local-storage.service';
import { USERS } from 'src/constants';

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

  constructor(private localStorage: UseLocalStorageService) {}

  onLogin(): void {
    const { email, password } = this.loginForm.controls;
    console.log(USERS);
    try {
      if(email.value === "" || password.value === ""){
        throw new Error("All fields are required!")
      }
      const user = USERS.find((f) => Number(f.password) === Number(password.value));
      console.log(user);
      
    } catch (error) {
      alert(error.message);
    }
    
  }
}
