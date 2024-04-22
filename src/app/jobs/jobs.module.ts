import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {JobsRoutingModule} from "./jobs-routing.module";
import {JobsComponent} from "./jobs.component";
import {JobListItemComponent} from "./job-list-item/job-list-item.component";
import {JobListComponent} from "./job-list/job-list.component";
import {JobFavoritesComponent} from "./job-favorites/job-favorites.component";
import {JobDetailsComponent} from "./job-details/job-details.component";
import {TagElementComponent} from "../common/tag-element/tag-element.component";


@NgModule({
  declarations: [
    JobsComponent,
    JobDetailsComponent,
    JobListItemComponent,
    JobFavoritesComponent,
    JobListComponent
  ],
  exports: [
    JobListItemComponent
  ],
    imports: [
        CommonModule,
        JobsRoutingModule,
        TagElementComponent
    ]
})
export class JobsModule {
}
