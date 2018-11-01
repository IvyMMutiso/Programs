import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from "@angular/material";

@Component({
  selector: "app-activity-details",
  templateUrl: "./activity-details.component.html",
  styleUrls: ["./activity-details.component.scss"]
})
export class ActivityDetailsComponent implements OnInit {
  constructor(private dialogRef: MatDialogRef<ActivityDetailsComponent>) {}

  ngOnInit() {}

  close() {
    this.dialogRef.close();
  }
}
