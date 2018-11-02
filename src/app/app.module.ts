import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import {
  MatToolbarModule,
  MatTableModule,
  MatDialogModule,
  MAT_DIALOG_DEFAULT_OPTIONS,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatIconModule,
  MatNativeDateModule
} from "@angular/material";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ProgramsService } from "./service/programs.service";
import { ProgramsListComponent } from "./components/programs-list/programs-list.component";
import { ActivityDetailsComponent } from "./components/activity-details/activity-details.component";
import { ActivitiesListComponent } from "./components/activities-list/activities-list.component";
import { DeleteActivityComponent } from "./components/delete-activity/delete-activity.component";

@NgModule({
  declarations: [
    AppComponent,
    ProgramsListComponent,
    ActivityDetailsComponent,
    ActivitiesListComponent,
    DeleteActivityComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatTableModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatIconModule,
    MatNativeDateModule
  ],
  entryComponents: [
    ActivityDetailsComponent,
    ActivitiesListComponent,
    DeleteActivityComponent
  ],
  providers: [
    ProgramsService,
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: false } }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
