import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'jobs',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./jobs/jobs.module').then(m => m.JobsModule)
  }
];
