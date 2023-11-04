import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserContextService } from 'src/app/context/user-context.service';

@Component({
  selector: 'app-jobseeker',
  templateUrl: './jobseeker.component.html',
  styleUrls: ['./jobseeker.component.css'],
})
export class JobseekerComponent {
  isPersonalDataChecked: boolean = false;
  isAgeChecked: boolean = false;
  isTermOfUseChecked: boolean = false;

  constructor(private useContext: UserContextService){}

  jobseekerForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    rePassword: new FormControl(''),
  });

  @Input() jobseeker: boolean;
  @Output() onJobseekerBack = new EventEmitter();

  onSetBack() {
    this.jobseeker = !this.jobseeker;
    this.onJobseekerBack.emit(this.jobseeker);
  }

  onSubmit(): void {
    // id=Math.floor(Math.random()*10000000000).toString(36)
    const {
      firstName,
      lastName,
      email,
      password,
      rePassword,
    } = this.jobseekerForm.controls;
    try {
      const newUser = {
        id: Math.floor(Math.random()*10000000000).toString(36),
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        password: password.value,
        rePassword: rePassword.value,
        age: this.isAgeChecked,
        termOfUse: this.isTermOfUseChecked,
        personalData: this.isPersonalDataChecked,
        role: "jobseeker",
        createdAt: new Date(),
        

      }
      
      
      console.log(this.isPersonalDataChecked);
      console.log(this.isAgeChecked);
      console.log(this.isTermOfUseChecked);
      console.log(newUser);
      
      // this.useContext.registration();
    } catch (error) {
      
    }
    console.log('hi');
  }
}
