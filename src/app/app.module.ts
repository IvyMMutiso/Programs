import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MAT_DIALOG_DEFAULT_OPTIONS } from "@angular/material";
import {
  MatToolbarModule,
  MatTableModule,
  MatDialogModule
} from "@angular/material";
import { ProgramsListComponent } from "./components/programs-list/programs-list.component";
import { HttpClientModule } from "@angular/common/http";
import { ActivityDetailsComponent } from "./components/activity-details/activity-details.component";
import { ProgramsService } from "./service/programs.service";
import { ActivitiesListComponent } from "./components/activities-list/activities-list.component";

@NgModule({
  declarations: [AppComponent, ProgramsListComponent, ActivityDetailsComponent, ActivitiesListComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatTableModule,
    MatDialogModule
  ],
  entryComponents: [ActivityDetailsComponent, ActivitiesListComponent],
  providers: [
    ProgramsService,
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: false } }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
