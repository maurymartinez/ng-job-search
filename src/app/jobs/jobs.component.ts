import {Component} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {filter} from "rxjs";

@Component({
  selector: 'njs-jobs-job',
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.css'
})
export class JobsComponent {
  activeRoute: string = '';

  constructor(private router: Router) {
    router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(route => this.activeRoute = (route as NavigationEnd).urlAfterRedirects)
  }
}
