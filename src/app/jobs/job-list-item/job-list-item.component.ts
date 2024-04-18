import {Component, Input} from '@angular/core';
import {Job} from "../entities/job";

@Component({
  selector: 'njs-jobs-job-list-item',
  templateUrl: './job-list-item.component.html',
  styleUrl: './job-list-item.component.css'
})
export class JobListItemComponent {

  @Input() job: Job = new Job(0, '', '', '', '');
}
