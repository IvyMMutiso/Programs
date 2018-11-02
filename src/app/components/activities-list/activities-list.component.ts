import { Component, OnInit, Inject } from "@angular/core";
import { Observable } from "rxjs";
import { Activity } from "src/app/models/activity";
import { MatTableDataSource, MAT_DIALOG_DATA, MatDialogConfig, MatDialog, MatDialogRef } from "@angular/material";
import { ProgramsService } from "src/app/service/programs.service";
import { DeleteActivityComponent } from "../delete-activity/delete-activity.component";
import { Program } from "src/app/models/program";

@Component({
  selector: "app-activities-list",
  templateUrl: "./activities-list.component.html",
  styleUrls: ["./activities-list.component.scss"]
})
export class ActivitiesListComponent implements OnInit {
  activities: Activity[];
  activities$: Observable<Activity[]>;
  displayedColumns: string[] = ["id", "name", "expectedStartDate", "actions"];
  dataSource: MatTableDataSource<Activity>;
  isLoading = true;

  constructor(
    private readonly programsService: ProgramsService,
    private readonly dialog: MatDialog,
    private readonly dialogRef: MatDialogRef<ActivitiesListComponent>,
    @Inject(MAT_DIALOG_DATA) public program: Program
  ) {}

  ngOnInit() {
    this.getProgramActivities(this.program.id);
  }

  getProgramActivities(programId: number) {
    this.activities = [];
    this.activities$ = this.programsService.getProgramActivities(programId);
    this.activities$.subscribe(activities => {
      this.isLoading = false;
      this.activities = activities;
      this.dataSource = new MatTableDataSource(this.activities);
    });
  }

  deleteActivity(activity: Activity) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    const dialogRef = this.dialog.open(DeleteActivityComponent, {
      data: activity,
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getProgramActivities(this.program.id);
      }
    });
  }

  cancel() {
    this.closeDialog();
  }

  closeDialog() {
    this.dialogRef.close("close");
  }
}
