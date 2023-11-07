import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JOBS_POSTS } from 'src/constants';
import { Job } from 'src/interface/Job';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css'],
})
export class JobDetailsComponent implements OnInit {
  jobDetail: Job;
  id: string;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id");
    this.jobDetail = JOBS_POSTS.find(j => j.id === Number(this.id));
    console.log(this.jobDetail);
    
  }
}
