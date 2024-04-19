import {Component, OnInit} from '@angular/core';
import {Job} from "../entities/job";
import {JobService} from "../services/job.service";

@Component({
  selector: 'njs-jobs-job-favorites',
  templateUrl: './job-favorites.component.html',
  styleUrl: './job-favorites.component.css'
})
export class JobFavoritesComponent implements OnInit {
  jobs: Job[] = [];

  constructor(private jobService: JobService) {
  }

  ngOnInit(): void {
    this.jobService.getFavorites()
      .subscribe(value => this.jobs = value)
  }
}
