import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./jobs/jobs.module').then(m => m.JobsModule)
  }
];
