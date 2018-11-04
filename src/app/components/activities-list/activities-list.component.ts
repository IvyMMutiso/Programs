import { Component, OnInit, Inject } from "@angular/core";
import { Observable, Subscription } from "rxjs";
import {
  MatTableDataSource,
  MAT_DIALOG_DATA,
  MatDialogConfig,
  MatDialog,
  MatDialogRef
} from "@angular/material";
import { DeleteActivityComponent } from "../delete-activity/delete-activity.component";
import { Store } from "@ngrx/store";
import * as fromStore from "../../lists/reducers/activities.reducer";
import * as ActivitiesActions from "../../lists/actions/activities.actions";
import { ProgramsService } from "src/app/lists/service/programs.service";
import { Program } from "src/app/lists/models/program";
import { Activity } from "src/app/lists/models/activity";

@Component({
  selector: "app-activities-list",
  templateUrl: "./activities-list.component.html",
  styleUrls: ["./activities-list.component.scss"]
})
export class ActivitiesListComponent implements OnInit {
  activities: Activity[];
  activities$: Observable<Activity[]>;
  displayedColumns: string[] = [
    "name",
    "expectedStartDate",
    "expectedEndDate",
    "actions"
  ];
  dataSource: MatTableDataSource<Activity>;
  isLoading = true;
  subscription: Subscription;

  constructor(
    private readonly programsService: ProgramsService,
    private readonly dialog: MatDialog,
    private readonly dialogRef: MatDialogRef<ActivitiesListComponent>,
    @Inject(MAT_DIALOG_DATA) public program: Program,
    private readonly store: Store<fromStore.ActivitiesState>
  ) {
    this.store.dispatch(new ActivitiesActions.GetActivitiesList(program.id));
  }

  ngOnInit() {
    // this.activities$ = this.store.pipe(select("activities"), map(activities => activities ? activities.activitiesList : ""));
    // console.log(" this.activities : ",  this.activities$);

    this.getProgramActivities(this.program.id);
  }

  getProgramActivities(programId: number) {
    // this.store.select("activities").subscribe((activitiesList: Array<Activity>) => {
    //     this.isLoading = false;
    //     this.activities = activitiesList;
    //     console.log("*******", this.activities);
    //     this.dataSource = new MatTableDataSource<Activity>(activitiesList);
    //   });

    this.activities$ = this.programsService.getProgramActivities(programId);
    this.activities$.subscribe(activities => {
      this.isLoading = false;
      this.activities = activities;
      console.log("this.activities : ", this.activities);
      this.dataSource = new MatTableDataSource<Activity>(this.activities);
    });
  }

  deleteActivity(activity: Activity) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    const dialogRef = this.dialog.open(DeleteActivityComponent, {
      data: activity
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
