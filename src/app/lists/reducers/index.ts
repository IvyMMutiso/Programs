import * as fromPrograms from "./programs.reducer";
import * as fromProgramsList from "./programs.reducer";
import * as fromActivities from "./activities.reducer";
import * as fromActivitiesList from "./activities.reducer";
import { ActionReducerMap } from "@ngrx/store";

export interface ProgramsState {
  programsList: fromProgramsList.ProgramsState;
}

export interface ActivitiesState {
  activitiesList: fromActivitiesList.ActivitiesState;
}

export const programsReducer: ActionReducerMap<ProgramsState> = {
  programsList: fromPrograms.programsReducer
};

export const activitiesReducers: ActionReducerMap<ActivitiesState> = {
    activitiesList: fromActivities.activitiesReducer
};

export const getProgramsList = (state: ProgramsState) => state.programsList.programsList;
export const GetActivitiesList = (state: ActivitiesState) => state.activitiesList.activitiesList;


