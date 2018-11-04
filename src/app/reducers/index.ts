import * as fromActivities from "./activities.reducer";
import * as fromActivitiesList from "./activities.reducer";
import { ActionReducerMap } from "@ngrx/store";

export interface ActivitiesState {
  activities: fromActivitiesList.ActivitiesState;
}

export const reducers: ActionReducerMap<ActivitiesState> = {
    activities: fromActivities.activitiesReducer
};


