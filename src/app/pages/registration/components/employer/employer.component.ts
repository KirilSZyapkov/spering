import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserContextService } from 'src/app/context/user-context.service';


@Component({
  selector: 'app-employer',
  templateUrl: './employer.component.html',
  styleUrls: ['./employer.component.css'],
})
export class EmployerComponent {
  isPersonalDataChecked: boolean = false;
  isAgeChecked: boolean = false;
  isTermOfUseChecked: boolean = false;

  constructor(private useContext: UserContextService, private router: Router){}

  employerForm = new FormGroup({
    companyName: new FormControl(''),
    idNumber: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    phoneNumber: new FormControl(''),
    password: new FormControl(''),
    rePassword: new FormControl('')
  });
  @Input() employer: boolean;

  @Output() onEmployerBack = new EventEmitter();

  onSetBack() {
    this.employer = !this.employer;
    this.onEmployerBack.emit(this.employer);
  }

  onSubmit(): void {
    const { firstName, lastName, email, password, rePassword, companyName, idNumber, phoneNumber } =
      this.employerForm.controls;
    try {
      if (
        this.isAgeChecked === false ||
        this.isPersonalDataChecked === false ||
        this.isTermOfUseChecked === false
      ) {
        throw new Error(
          'Please agree with Age, Personal Data and Turm of Use!'
        );
      } else {
        const newUser = {
          id: Math.floor(Math.random() * 10000000000).toString(36),
          firstName: firstName.value,
          lastName: lastName.value,
          email: email.value,
          password: password.value,
          rePassword: rePassword.value,
          age: this.isAgeChecked,
          termOfUse: this.isTermOfUseChecked,
          personalData: this.isPersonalDataChecked,
          role: 'employer',
          createdAt: new Date(),
          companyName: companyName.value,
          idNumber: idNumber.value,
          phoneNumber: phoneNumber.value
        };

        this.useContext.registration(newUser);
        this.router.navigate(['/']);
      }
    } catch (error) {
      alert(error.message);
    }
    
  }
}
