import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {JobsRoutingModule} from "./jobs-routing.module";
import {JobsComponent} from "./jobs.component";
import {JobListItemComponent} from "./job-list-item/job-list-item.component";
import {JobListComponent} from "./job-list/job-list.component";
import {JobFavoritesComponent} from "./job-favorites/job-favorites.component";


@NgModule({
  declarations: [
    JobsComponent,
    JobListItemComponent,
    JobFavoritesComponent,
    JobListComponent
  ],
  exports: [
    JobListItemComponent
  ],
  imports: [
    CommonModule,
    JobsRoutingModule
  ]
})
export class JobsModule {
}
