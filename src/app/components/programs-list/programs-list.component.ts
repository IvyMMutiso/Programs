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
  ) {
    // this.programs$ = store.pipe(select(new GetProgramsList));
    // this.subscription = (this.store.pipe(select(new GetProgramsList)).subscribe(data => {
    //   console.log("programs$ : ", data);
    //   this.programs = data;
    // }));

    // this.programs$ = store.select("programs");
  }

  ngOnInit() {
    // this.programs$ = this.store.select(new GetProgramsList);
    this.programsService.getPrograms().subscribe(
      programs => {
        console.log(programs);
        this.store.dispatch({ type: "request_blogs", payload: programs});
        this.isLoading = false;
        this.programs = programs;
        this.dataSource = new MatTableDataSource(this.programs);
      }
    );

    // ("all").subscribe(
    //   blogs=> {this.store.dispatch({ type: "request_blogs", payload:          blogs});
    //   }
    // );
    // this.subscription = this.programs$.subscribe(data => {
    //   console.log("programs$ : ", this.programs$);
    //   // this.prepareExtensionsList(data);
    // });
    // this.getPrograms();
  }

  getPrograms() {
    this.programs$ = this.programsService.getPrograms();
    this.programs$.subscribe(programs => {
      this.programs = programs;
      this.dataSource = new MatTableDataSource(this.programs);
    });
  }

  viewActivities(program: Program) {
    this.showDialog(ActivitiesListComponent, program);
  }

  addActivity(program: Program) {
    this.showDialog(ActivityDetailsComponent, program);
  }

  showDialog(component, program) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;

    const dialogRef = this.dialog.open(component, {
      data: program,
      panelClass: "activities-dialog"
    });
    // dialogRef.afterClosed().subscribe(result => {
    //   if (result) {
    //     this.getProducts();
    //   }
    // });
  }
}
