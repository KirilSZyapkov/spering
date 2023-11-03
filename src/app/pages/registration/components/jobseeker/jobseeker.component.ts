import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserContextService } from 'src/app/context/user-context.service';

@Component({
  selector: 'app-jobseeker',
  templateUrl: './jobseeker.component.html',
  styleUrls: ['./jobseeker.component.css'],
})
export class JobseekerComponent {

  constructor(private useContext: UserContextService){}

  jobseekerForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    rePassword: new FormControl(''),
    age: new FormControl(''),
    termOfUse: new FormControl(''),
    personalData: new FormControl(''),
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
      age,
      termOfUse,
      personalData,
    } = this.jobseekerForm.controls;
    try {
      const data = {
        id: Math.floor(Math.random()*10000000000).toString(36),
        firstName: firstName.value,
        lastName,
        email,

      }
      this.useContext.registration
    } catch (error) {
      
    }
    console.log('hi');
  }
}
