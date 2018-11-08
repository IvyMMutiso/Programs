import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StoreModule } from "@ngrx/store";
import { activitiesReducer } from "./reducers/activities.reducer";

@NgModule({
  imports: [
    CommonModule,
    // StoreModule.forFeature("activities", activitiesReducer)
  ],
  declarations: []
})
export class ActivitiesModule { }
