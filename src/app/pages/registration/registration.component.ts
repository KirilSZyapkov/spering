import { Component } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {
  registration: boolean = true;
  jobseeker: boolean = false;
  employer: boolean = false;

  onClickJobseeker() {
    this.registration = false;
    this.jobseeker = true;
  }

  onClickEmployer() {
    this.registration = false;
    this.employer = true;
  }

  backFromJobseeker(value: boolean){    
    this.registration = true;
    this.jobseeker = value;
  }
}
