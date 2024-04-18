import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {JobsRoutingModule} from "./jobs-routing.module";
import {JobsComponent} from "./jobs.component";
import {JobListItemComponent} from "./job-list-item/job-list-item.component";



@NgModule({
  declarations: [
    JobsComponent,
    JobListItemComponent
  ],
  imports: [
    CommonModule,
    JobsRoutingModule
  ]
})
export class JobsModule { }
