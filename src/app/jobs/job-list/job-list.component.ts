import {Component, OnInit} from '@angular/core';
import {Job} from "../entities/job";
import {JobService} from "../services/job.service";

@Component({
  selector: 'njs-jobs-job-list',
  templateUrl: './job-list.component.html',
  styleUrl: './job-list.component.css'
})
export class JobListComponent implements OnInit {

  jobs: Job[] = [];

  constructor(private jobService: JobService) {
  }

  ngOnInit(): void {
    this.jobService.getAllJobs()
      .subscribe(value => this.jobs = value)
  }

  jobUpdate(job: Job) {
    if (job.favorite)
      this.jobService.addFavorite(job.id);
    else
      this.jobService.removeFavorite(job.id);
  }
}
