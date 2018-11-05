import * as fromPrograms from "./programs.reducer";
import * as fromProgramsList from "./programs.reducer";
import { ActionReducerMap } from "@ngrx/store";

export interface ProgramsState {
  programsList: fromProgramsList.ProgramsState;
}

export const programsReducer: ActionReducerMap<ProgramsState> = {
  programsList: fromPrograms.programsReducer
};

export const getProgramsList = (state: ProgramsState) => state.programsList.programsList;


