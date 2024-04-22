import {Component, OnInit} from '@angular/core';
import {JobDetails} from "../entities/job-details";
import {JobService} from "../services/job.service";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";

@Component({
  selector: 'njs-jobs-job-details',
  templateUrl: './job-details.component.html',
  styleUrl: './job-details.component.css'
})
export class JobDetailsComponent implements OnInit {

  jobDetails: JobDetails = new JobDetails(0, '', '', '', '', false, '', [], [], '', '');
  description: SafeHtml = "";

  constructor(private jobService: JobService, private route: ActivatedRoute, private location: Location, private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.jobService.getJobDetails(params['jobId'])
        .subscribe(job => {
          this.jobDetails = job;
          this.description = this.sanitizer.bypassSecurityTrustHtml(job.description);
        });
    });
  }

  back() {
    this.location.back();
  }

}
