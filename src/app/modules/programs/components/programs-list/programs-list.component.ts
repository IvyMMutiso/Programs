import { Component, OnInit, ViewChild } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Store, select } from "@ngrx/store";

import {
  MatTableDataSource,
  MatDialog,
  MatDialogConfig,
  MatPaginator
} from "@angular/material";
import { Subscription } from "rxjs";
import * as fromStore from "../../reducers/programs.reducer";
import * as ProgramsActions from "../../actions/programs.actions";
import { Program } from "../../models/program";
import { ActivitiesListComponent } from "src/app/modules/activities/components/activities-list/activities-list.component";
import { ActivityDetailsComponent } from "src/app/modules/activities/components/activity-details/activity-details.component";
import { ProgramsService } from "src/app/modules/shared/service/programs.service";
import { selectAllPrograms } from "../../reducers";

@Component({
  selector: "app-programs-list",
  templateUrl: "./programs-list.component.html",
  styleUrls: ["./programs-list.component.scss"]
})
export class ProgramsListComponent implements OnInit {
  programs: Program[];
  programs$: Observable<Program[]>;
  displayedColumns: string[] = ["name", "start_date", "actions"];
  dataSource = new MatTableDataSource<Program>();
  subscription: Subscription;
  isLoading = true;
  @ViewChild(MatPaginator)
  paginator: MatPaginator;
  pageSize = 10;
  currentPage = 0;
  totalSize = 0;

  constructor(
    private readonly programsService: ProgramsService,
    private readonly dialog: MatDialog,
    private readonly store: Store<fromStore.ProgramsState>
  ) {
    this.store.dispatch(new ProgramsActions.GetProgramsList());
  }

  ngOnInit() {
    this.getPrograms();
  }

  getPrograms() {
    this.subscription = this.store
      .pipe(select(selectAllPrograms))
      .subscribe(data => {
        this.prepareProgramsList(data);
      });

    // this.programs$ = this.programsService.getPrograms();
    // this.programs$.subscribe(programs => {
    //   this.isLoading = false;
    //   this.programs = programs;
    //   // console.log(programs);
    //   this.dataSource = new MatTableDataSource(this.programs);
    //   this.dataSource.paginator = this.paginator;
    //   this.totalSize = this.programs.length;
    //   this.iterator();
    // });
  }

  prepareProgramsList(data) {
    if (data == null) {
      this.store.dispatch(new ProgramsActions.GetProgramsList());
      return;
    }

    this.programs = data;
    this.dataSource = new MatTableDataSource<Program>(null);
    setTimeout(() => {
      this.dataSource = new MatTableDataSource<Program>(this.programs);
      this.isLoading = false;
      this.dataSource.paginator = this.paginator;
      this.totalSize = this.programs.length;
      this.iterator();
    }, 1);
  }

  iterator() {
    const end = (this.currentPage + 1) * this.pageSize;
    const start = this.currentPage * this.pageSize;
    const part = this.programs.slice(start, end);
    this.dataSource = new MatTableDataSource(part);
  }

  getPaginatorData(e: any) {
    this.currentPage = e.pageIndex;
    this.pageSize = e.pageSize;
    this.iterator();
  }

  dialogConfig(program: Program) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.hasBackdrop = true;
    dialogConfig.data = program;
    dialogConfig.panelClass = "activities-dialog";

    return dialogConfig;
  }

  viewActivities(program: Program) {
    this.dialog.open(ActivitiesListComponent, this.dialogConfig(program));
  }

  addActivity(program: Program) {
    const dialogRef = this.dialog.open(
      ActivityDetailsComponent,
      this.dialogConfig(program)
    );
    dialogRef.afterClosed().subscribe(result => {
      this.viewActivities(program);
    });
  }
}
