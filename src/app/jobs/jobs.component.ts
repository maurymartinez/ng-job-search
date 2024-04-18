import {Component, OnInit} from '@angular/core';
import {Job} from "./entities/job";
import {JobService} from "./services/job.service";

@Component({
  selector: 'njs-jobs-job',
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.css'
})
export class JobsComponent implements OnInit {

  jobs: Job[] = [];

  constructor(private jobService: JobService) {
  }

  ngOnInit(): void {
    this.jobService.getAllJobs()
      .subscribe(value => this.jobs = value)
  }

}
