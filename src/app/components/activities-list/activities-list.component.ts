import { Component, OnInit, Inject, ViewChild, OnDestroy } from "@angular/core";
import { Observable, Subscription } from "rxjs";
import {
  MatTableDataSource,
  MAT_DIALOG_DATA,
  MatDialogConfig,
  MatDialog,
  MatDialogRef,
  MatPaginator
} from "@angular/material";
import { DeleteActivityComponent } from "../delete-activity/delete-activity.component";
import { Store, select } from "@ngrx/store";
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
export class ActivitiesListComponent implements OnInit, OnDestroy {
  activities: Activity[];
  activities$: Observable<Activity[]>;
  displayedColumns: string[] = [
    "name",
    "expectedStartDate",
    "expectedEndDate",
    "progress",
    "status",
    "actions"
  ];
  dataSource: MatTableDataSource<Activity>;
  isLoading = true;
  subscription: Subscription;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  pageSize = 6;
  currentPage = 0;
  totalSize = 0;

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

    this.getProgramActivities();
  }

  getProgramActivities() {
    // this.activities$ = this.programsService.getProgramActivities(programId);
    // this.activities$.subscribe(activities => {
    //   this.isLoading = false;
    //   this.activities = activities;
    //   this.dataSource = new MatTableDataSource<Activity>(this.activities);
    //   this.dataSource.paginator = this.paginator;
    //   this.totalSize = this.activities.length;
    //   this.iterator();
    // });

    this.subscription = this.store.pipe(select("activities")).subscribe(data => {
      this.prepareActivitiesList(data);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  prepareActivitiesList(data) {
    if (data.activitiesList == null) {
      this.store.dispatch(new ActivitiesActions.GetActivitiesList(this.program.id));
      return;
    }

    if (data.activitiesList.activitiesList !== null) {
      this.activities = data.activitiesList.activitiesList;
      this.dataSource = new MatTableDataSource<Activity>(null);
      setTimeout(() => {
        this.dataSource = new MatTableDataSource<Activity>(this.activities);
        this.isLoading = false;
        this.dataSource.paginator = this.paginator;
        this.totalSize = this.activities.length;
        this.iterator();
      }, 1);
    }
  }

  iterator() {
    const end = (this.currentPage + 1) * this.pageSize;
    const start = this.currentPage * this.pageSize;
    const part = this.activities.slice(start, end);
    this.dataSource = new MatTableDataSource(part);
  }

  getPaginatorData(e: any) {
    this.currentPage = e.pageIndex;
    this.pageSize = e.pageSize;
    this.iterator();
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
        this.getProgramActivities();
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
