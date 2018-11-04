import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Store, select } from "@ngrx/store";
import { Program } from "../../models/program";
import { Activity } from "../../models/activity";
import { AppState } from "../../app.state";

import {
  MatTableDataSource,
  MatDialog,
  MatDialogConfig
} from "@angular/material";
import { ProgramsService } from "src/app/service/programs.service";
import { ActivityDetailsComponent } from "../activity-details/activity-details.component";
import { ActivitiesListComponent } from "../activities-list/activities-list.component";
import { Subscription } from "rxjs";
import { GetProgramsList } from "src/app/actions/programs.actions";

@Component({
  selector: "app-programs-list",
  templateUrl: "./programs-list.component.html",
  styleUrls: ["./programs-list.component.scss"]
})
export class ProgramsListComponent implements OnInit {
  programs: Program[];
  programs$: Observable<Program[]>;
  activities: Activity[];
  activities$: Observable<Activity[]>;
  displayedColumns: string[] = ["name", "actions"];
  dataSource: MatTableDataSource<Program>;
  subscription: Subscription;
  isLoading = true;

  constructor(
    private readonly programsService: ProgramsService,
    private readonly dialog: MatDialog,
    private readonly store: Store<AppState>
  ) {}

  ngOnInit() {
    // this.programs$ = this.store.select(new GetProgramsList);
    // this.programsService.getPrograms().subscribe(
    //   programs => {
    //     // console.log(programs);
    //     this.store.dispatch({ type: "programs", payload: programs});
    //     this.isLoading = false;
    //     this.programs = programs;
    //     this.dataSource = new MatTableDataSource(this.programs);
    //   }
    // );
    this.getPrograms();
  }

  getPrograms() {
    this.programs$ = this.programsService.getPrograms();
    this.programs$.subscribe(programs => {
      this.isLoading = false;
      this.programs = programs;
      console.log(programs);
      this.dataSource = new MatTableDataSource(this.programs);
    });
  }

  viewActivities(program: Program) {
    // this.showDialog(ActivitiesListComponent, program);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;

    const dialogRef = this.dialog.open(ActivitiesListComponent, {
      data: program,
      panelClass: "activities-dialog"
    });
  }

  addActivity(program: Program) {
    // this.showDialog(ActivityDetailsComponent, program);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;

    const dialogRef = this.dialog.open(ActivityDetailsComponent, {
      data: program,
      panelClass: "activities-dialog"
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log("logging me");
        this.viewActivities(program);
    });
  }

  showDialog(component, program) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;

    const dialogRef = this.dialog.open(component, {
      data: program,
      panelClass: "activities-dialog"
    });
  }
}
