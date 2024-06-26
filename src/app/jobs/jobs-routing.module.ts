import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {JobsComponent} from "./jobs.component";
import {JobListComponent} from "./job-list/job-list.component";
import {JobFavoritesComponent} from "./job-favorites/job-favorites.component";
import {JobDetailsComponent} from "./job-details/job-details.component";

const routes: Routes = [
  {
    path: '',
    component: JobsComponent,
    children: [
      {path: '', component: JobListComponent},
      {path: 'favorites', component: JobFavoritesComponent},
      {path: ':jobId', component: JobDetailsComponent}
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobsRoutingModule {
}
