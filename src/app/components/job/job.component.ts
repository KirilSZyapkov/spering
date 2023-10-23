import { Component, Input } from '@angular/core';
import { Job } from 'src/interface/Job';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css'],
})
export class JobComponent {
  @Input() job: Job;

}
