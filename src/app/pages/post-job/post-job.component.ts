import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserContextService } from 'src/app/context/user-context.service';
import { User } from 'src/interface/User';


@Component({
  selector: 'app-post-job',
  templateUrl: './post-job.component.html',
  styleUrls: ['./post-job.component.css'],
})
export class PostJobComponent implements OnInit{
  postJobForm = new FormGroup({
    jobTitle: new FormControl(''),
    responsibilities: new FormControl(''),
    forUs: new FormControl(''),
    location: new FormControl(''),
    weOffer: new FormControl(''),
    necessarySkills: new FormControl(''),
    contactInformation: new FormControl(''),
    deadLine: new FormControl(''),
    work: new FormControl(''),
    schedule: new FormControl(''),
    suitableFor: new FormControl(''),
    experience: new FormControl(''),
    salary: new FormControl(''),
    logoUrl: new FormControl(''),
  });
  user: User | undefined;

  constructor(private useContext: UserContextService, private router: Router) {}
  
 ngOnInit(): void{
  this.useContext.value.subscribe((user)=> this.user = user);
  if(this.user.firstName === undefined){
    this.router.navigate(["login"]);
  }
  console.log();
 }

  
  onSubmit(): void {
    const {
      jobTitle,
      responsibilities,
      forUs,
      location,
      weOffer,
      necessarySkills,
      contactInformation,
      deadLine,
      work,
      schedule,
      suitableFor,
      experience,
      salary,
      logoUrl,
    } = this.postJobForm.controls;
    try {
      const newPost = {};
      alert('hi');
    } catch (error) {
      alert(error.message);
    }
  }
}
