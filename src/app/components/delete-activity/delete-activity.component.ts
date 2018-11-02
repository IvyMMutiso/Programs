import { Component, OnInit, Inject } from "@angular/core";
import { ProgramsService } from "src/app/service/programs.service";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { Activity } from "src/app/models/activity";

@Component({
  selector: "app-delete-activity",
  templateUrl: "./delete-activity.component.html",
  styleUrls: ["./delete-activity.component.scss"]
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
    this.programsService.deleteProgramActivity(this.activity.id)
    .subscribe((response) => {
      console.log(response);
      this.closeDialog();
    });
  }

  cancel() {
    this.closeDialog();
  }

  closeDialog() {
    this.dialogRef.close("close");
  }

}
