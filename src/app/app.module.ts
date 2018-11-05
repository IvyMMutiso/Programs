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
  MatPaginatorModule
} from "@angular/material";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ProgramsListComponent } from "./components/programs-list/programs-list.component";
import { ActivityDetailsComponent } from "./components/activity-details/activity-details.component";
import { ActivitiesListComponent } from "./components/activities-list/activities-list.component";
import { DeleteActivityComponent } from "./components/delete-activity/delete-activity.component";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { ProgramEffects } from "../app/lists/effects/programs.effects";
import { ActivitiesEffects } from "../app/lists/effects/activites.effects";
import { ProgramsService } from "./lists/service/programs.service";
import { ListsModule } from "./lists/lists.module";
import { metaReducers, reducers } from "./reducers";

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
    ListsModule.forRoot(),
    StoreModule.forRoot(reducers, { metaReducers }),
    MatPaginatorModule
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
