import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";
import * as moment from "moment";
import { DateAdapter, MAT_DATE_LOCALE, MAT_DATE_FORMATS } from "@angular/material/core";
import { MomentDateAdapter } from "@angular/material-moment-adapter";
import { ProgramsService } from "src/app/lists/service/programs.service";
import { Program } from "src/app/lists/models/program";
import { Activity } from "src/app/lists/models/activity";

export const MY_FORMATS = {
  display: {
    dateInput: "DD.MM.YYYY",
    monthYearLabel: "MMMM Y",
    dateA11yLabel: "LL",
    monthYearA11yLabel: "MMMM Y"
  }
};
@Component({
  selector: "app-activity-details",
  templateUrl: "./activity-details.component.html",
  styleUrls: ["./activity-details.component.scss"],
  providers: [
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
})
export class ActivityDetailsComponent implements OnInit {
  activityForm: FormGroup;
  activity: Activity;
  submitted = false;

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

  onSubmit(): void {
      this.submitted = true;
  }

  saveActivity() {
    this.activity.workflowlevel1 = "https://dev.toladata.io/api/workflowlevel1/" + this.program.id + "/";
    this.activity.expected_start_date = moment(this.activity.expected_start_date, "YYYY-MM-DD[T]HH:mm:ss");
    this.activity.expected_end_date = moment(this.activity.expected_end_date, "YYYY-MM-DD[T]HH:mm:ss");
    this.createProduct();
  }

  createProduct() {
    this.programsService.addProgramActivity(this.activity)
      .subscribe((response) => {
        if (response) {
          this.closeDialog();
        }
      });
  }

  cancel() {
    this.closeDialog();
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
