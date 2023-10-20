import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-jobseeker',
  templateUrl: './jobseeker.component.html',
  styleUrls: ['./jobseeker.component.css'],
})
export class JobseekerComponent {
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

  @Input() jobseeker:boolean;
  

  @Output() onJobseekerBack = new EventEmitter();

  onSetBack(){
    this.jobseeker = !this.jobseeker;
    this.onJobseekerBack.emit(this.jobseeker);
  }
}
