import { Component, OnInit, Inject, ChangeDetectionStrategy } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { Activity } from "../../models/activity";
import { ProgramsService } from "src/app/modules/shared/service/programs.service";

@Component({
  selector: "app-delete-activity",
  templateUrl: "./delete-activity.component.html",
  styleUrls: ["./delete-activity.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeleteActivityComponent implements OnInit {

  constructor(
    private readonly programsService: ProgramsService,
    private readonly dialogRef: MatDialogRef<DeleteActivityComponent>,
    @Inject(MAT_DIALOG_DATA) public activity: Activity
  ) { }

  ngOnInit() {
  }

  deleteActivity() {
    this.programsService.deleteProgramActivity(this.activity.id);
    this.closeDialog();
    // .subscribe((response) => {
    //   this.closeDialog();
    // });
  }

  cancel() {
    this.closeDialog();
  }

  closeDialog() {
    this.dialogRef.close("close");
  }

}
