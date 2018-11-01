import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Activity } from "src/app/models/activity";
import { ProgramsService } from "src/app/service/programs.service";
import { Program } from "src/app/models/program";

@Component({
  selector: "app-activity-details",
  templateUrl: "./activity-details.component.html",
  styleUrls: ["./activity-details.component.scss"]
})
export class ActivityDetailsComponent implements OnInit {
  activityForm: FormGroup;
  activity: Activity;

  constructor(
    private readonly programsService: ProgramsService,
    private readonly dialogRef: MatDialogRef<ActivityDetailsComponent>,
    private readonly formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public program: Program
  ) {}

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.activityForm = this.formBuilder.group({
      name: ["", Validators.required],
      expected_start_date: [""],
      expected_end_date: [""]
    });

    this.activityForm.valueChanges.subscribe(value => {
      this.activity = value;
    });
  }

  saveActivity() {
    this.activity.workflowlevel1 = "https://dev.toladata.io/api/workflowlevel1/" + this.program.id + "/";
    // this.activity.id = this.program.id;
    this.createProduct();
    this.closeDialog();
  }

  createProduct() {
    console.log(this.activity);
    this.programsService.addProgramActivity(this.activity)
      .subscribe((response) => {
        console.log(response);
        // if (response.success) {
        //   this.closeDialog();
        // } else {
        //   // this.duplicateProduct = true;
        // }
      });
  }

  cancel() {
    this.closeDialog();
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
