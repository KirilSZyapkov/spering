import { Component } from '@angular/core';
import { JOBS_POSTS } from 'src/constants/index';
import { Job } from 'src/interface/Job';

@Component({
  selector: 'app-job-search',
  templateUrl: './job-search.component.html',
  styleUrls: ['./job-search.component.css'],
})
export class JobSearchComponent {
  jobs: Job[] = JOBS_POSTS;
}
