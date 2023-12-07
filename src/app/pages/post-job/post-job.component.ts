import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { UserContextService } from 'src/app/context/user-context.service';
import { User } from 'src/interface/User';
import { JOBS_POSTS } from 'src/constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-job',
  templateUrl: './post-job.component.html',
  styleUrls: ['./post-job.component.css'],
})
export class PostJobComponent implements OnInit {
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

  ngOnInit(): void {
    this.useContext.value.subscribe((user) => (this.user = user));
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
      if (
        jobTitle.value === '' ||
        location.value === '' ||
        logoUrl.value === ''
      ) {
        throw new Error('Add Job Title, Town and Logo!');
      } else {
        const newPost = {
          id: Math.floor(Math.random() * 10000000000).toString(36),
          posted_at: new Date().toUTCString().slice(0, 16),
          posted_from: this.user.companyName,
          title: jobTitle.value,
          location: location.value,
          responsibilities: responsibilities.value,
          we_offer: weOffer.value,
          necessary_skils: necessarySkills.value,
          about_us: forUs.value,
          contact_information: contactInformation.value,
          deadLine: deadLine.value,
          work: work.value,
          schedule: schedule.value,
          suitable_for: suitableFor.value,
          experience: experience.value,
          salary: salary.value,
          logoUrl: logoUrl.value,
        };

        JOBS_POSTS.push(newPost);
        this.router.navigate(['/']);
        console.log(logoUrl.value);
      }
    } catch (error) {
      alert(error.message);
    }
    // JOBS_POSTS.push(newPost);

    console.log(JOBS_POSTS);
  }
}
