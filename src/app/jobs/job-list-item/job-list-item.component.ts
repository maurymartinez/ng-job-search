import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Job} from "../entities/job";

@Component({
  selector: 'njs-jobs-job-list-item',
  templateUrl: './job-list-item.component.html',
  styleUrl: './job-list-item.component.css'
})
export class JobListItemComponent {

  @Input() job: Job = new Job(0, '', '', '', '', false);
  @Input() showFavoriteIcon: boolean = true;

  @Output() jobUpdate: EventEmitter<Job> = new EventEmitter<Job>();

  setFavorite() {
    this.job.favorite = !this.job.favorite;

    this.jobUpdate.emit(this.job);
  }
}
