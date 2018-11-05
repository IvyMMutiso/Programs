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
  MatNativeDateModule,
  MatProgressSpinnerModule,
  MatPaginatorModule,
  MatTooltipModule
} from "@angular/material";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { metaReducers, reducers } from "./reducers";
import { ProgramsListComponent } from "./modules/programs/components/programs-list/programs-list.component";
import { ProgramEffects } from "./modules/programs/effects/programs.effects";
import { ActivityDetailsComponent } from "./modules/activities/components/activity-details/activity-details.component";
import { ActivitiesListComponent } from "./modules/activities/components/activities-list/activities-list.component";
import { DeleteActivityComponent } from "./modules/activities/components/delete-activity/delete-activity.component";
import { ActivitiesEffects } from "./modules/activities/effects/activites.effects";
import { ProgramsService } from "./modules/shared/service/programs.service";
import { SharedModule } from "./modules/shared/shared.module";

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
    MatNativeDateModule,
    EffectsModule.forRoot([ProgramEffects, ActivitiesEffects]),
    MatProgressSpinnerModule,
    SharedModule.forRoot(),
    StoreModule.forRoot(reducers, { metaReducers }),
    MatPaginatorModule,
    MatTooltipModule
  ],
  entryComponents: [
    ActivityDetailsComponent,
    ActivitiesListComponent,
    DeleteActivityComponent
  ],
  providers: [
    ProgramsService,
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: true } }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
