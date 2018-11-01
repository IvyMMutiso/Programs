import { Component, OnInit, Inject } from "@angular/core";
import { Observable } from "rxjs";
import { Activity } from "src/app/models/activity";
import { MatTableDataSource, MAT_DIALOG_DATA } from "@angular/material";
import { ProgramsService } from "src/app/service/programs.service";

@Component({
  selector: "app-activities-list",
  templateUrl: "./activities-list.component.html",
  styleUrls: ["./activities-list.component.scss"]
})
export class ActivitiesListComponent implements OnInit {
  activities: Activity[];
  activities$: Observable<Activity[]>;
  displayedColumns: string[] = ["id", "name"];
  dataSource: MatTableDataSource<Activity>;
  constructor(
    private readonly programsService: ProgramsService,
    @Inject(MAT_DIALOG_DATA) public data: number) { }

  ngOnInit() {
    this.getProgramActivities(this.data);
  }

  getProgramActivities(programId: number) {
    this.activities = [];
    this.activities$ = this.programsService.getProgramActivities(programId);
    this.activities$.subscribe(activities => {
      this.activities = activities;
      console.log(activities);
      this.dataSource = new MatTableDataSource(this.activities);
    });
  }

}
