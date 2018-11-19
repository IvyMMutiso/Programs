import { Component, OnInit, Inject, ChangeDetectionStrategy } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";
import * as moment from "moment";
import { DateAdapter, MAT_DATE_LOCALE, MAT_DATE_FORMATS } from "@angular/material/core";
import { MomentDateAdapter } from "@angular/material-moment-adapter";
import { Activity } from "../../models/activity";
import { Program } from "src/app/modules/programs/models/program";
import { ProgramsService } from "src/app/modules/shared/service/programs.service";
import { Store } from "@ngrx/store";
import * as fromStore from "../../reducers/activities.reducer";


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
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActivityDetailsComponent implements OnInit {
  activityForm: FormGroup;
  activity: Activity;
  submitted = false;

  constructor(
    private readonly programsService: ProgramsService,
    private readonly dialogRef: MatDialogRef<ActivityDetailsComponent>,
    private readonly formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public program: Program,
    private readonly store: Store<fromStore.ActivitiesState>
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
    this.activity.expected_start_date = moment(this.activity.expected_start_date, "YYYY-MM-DD[T]HH:mm:ss");
    this.activity.expected_end_date = moment(this.activity.expected_end_date, "YYYY-MM-DD[T]HH:mm:ss");
    this.createProduct();
    this.submitted = true;
  }

  createProduct() {
    // this.store.dispatch(new AddActivity(this.activity));
    // this.closeDialog();

    this.programsService.addProgramActivity(this.activity)
      .subscribe((response) => {
        if (response) {
          console.log("response : ", response);
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
