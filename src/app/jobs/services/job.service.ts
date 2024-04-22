import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Job} from "../entities/job";
import {map, Observable} from "rxjs";
import {JobDetails} from "../entities/job-details";

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private http: HttpClient) {
  }

  getAllJobs(): Observable<Job[]> {
    return this.http.get<Job[]>("/jobs")
      .pipe(
        map(jobs => jobs.map(job => {
          if (localStorage.getItem(job.id.toString()))
            job.favorite = true;

          return job;
        }))
      );
  }

  addFavorite(jobId: number) {
    localStorage.setItem(jobId.toString(), '1');
  }

  removeFavorite(jobId: number) {
    localStorage.removeItem(jobId.toString());
  }

  getFavorites(): Observable<Job[]> {
    return this.getAllJobs()
      .pipe(
        map(jobs => jobs.filter(job => job.favorite))
      )
  }

  getJobDetails(jobId: number): Observable<JobDetails> {
    return this.http.get<JobDetails>(`/jobs/${jobId}`);
  }
}
