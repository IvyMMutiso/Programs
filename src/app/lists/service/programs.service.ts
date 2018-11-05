import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { Program } from "../models/program";
import { Activity } from "../models/activity";
import { error } from "@angular/compiler/src/util";

@Injectable({
  providedIn: "root"
})
export class ProgramsService {
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer GfR6vIHG0zTWaJle6TjNXvYUrjDn6g"
    })
  };
  LIVE_URI = "https://dev.toladata.io/api/";

  constructor(private httpClient: HttpClient) {}

  getPrograms(): Observable<Program[]> {
    return this.httpClient
    // const requestUrl = `${href}?q=repo:angular/material2&sort=${sort}&order=${order}&page=${page + 1}`;
    // http://localhost:4200/api/lessons?courseId=1&filter=&sortOrder=asc&pageNumber=0&pageSize=3
      .get(`${this.LIVE_URI}workflowlevel1/`, this.httpOptions)
      // .pipe(map((res: Program[]) => res));
      .pipe(
        catchError(error),
        map((result: Program[]) => {
          return result.map(programs => {
            return new Program({ ...programs });
          });
        })
      );
  }

  getProgramActivities(programId: number): Observable<Activity[]> {
    return this.httpClient
      .get<Array<Activity>>(
        `${this.LIVE_URI}workflowlevel2/?workflowlevel1__id=` + programId,
        this.httpOptions
      )
      .pipe(
        catchError(error),
        // map((res: Activity[]) => res));
        map((result: Activity[]) => {
          return result.map(activity => {
            return new Activity({ ...activity });
          });
        })
      );
  }

  addProgramActivity(activity: Activity): Observable<Activity[]> {
    return this.httpClient
      .post(`${this.LIVE_URI}workflowlevel2/`, activity, this.httpOptions)
      .pipe(map((res: Activity[]) => res));
  }

  deleteProgramActivity(activityId: number) {
    return this.httpClient
      .delete(`${this.LIVE_URI}workflowlevel2/` + activityId, this.httpOptions)
      .pipe(map((res: Activity[]) => res));
  }
}
