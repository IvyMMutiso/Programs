import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, BehaviorSubject } from "rxjs";
import { map, skip, catchError } from "rxjs/operators";
import { Program } from "../models/program";
import { Activity } from "../models/activity";

@Injectable({
  providedIn: "root"
})
export class ProgramsService {
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      "Authorization": "Bearer GfR6vIHG0zTWaJle6TjNXvYUrjDn6g",
      // "X-Requested-With": "XMLHttpRequest"
    })
  };
  LIVE_URI = "https://dev.toladata.io/api/";

  constructor(private httpClient: HttpClient) {}

  getPrograms(): Observable<Program[]> {
    return this.httpClient
      .get(`${this.LIVE_URI}workflowlevel1/`, this.httpOptions)
      .pipe(map((res: Program[]) => res));
  }

  getProgramActivities(programId: number): Observable<Activity[]> {
    return this.httpClient
      .get(`${this.LIVE_URI}workflowlevel2/?workflowlevel1__id=` + programId, this.httpOptions)
      .pipe(map((res: Activity[]) => res));
  }

  addProgramActivity(activity: Activity): Observable<Activity[]> {
    return this.httpClient
      .post(`${this.LIVE_URI}workflowlevel2/`, activity, this.httpOptions)
      .pipe(map((res: Activity[]) => res));
      // .pipe(map((res: AddUpdateResponse) => res));
  }
}
