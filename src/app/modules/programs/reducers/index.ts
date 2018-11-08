import * as fromPrograms from "./programs.reducer";
// import * as fromProgramsList from "./programs.reducer";
import { ActionReducerMap, createFeatureSelector, createSelector } from "@ngrx/store";

export interface ProgramsState {
  programs: fromPrograms.ProgramsState;
}

export const programsReducer: ActionReducerMap<ProgramsState> = {
  programs: fromPrograms.programsReducer
};

// export const getProgramsList = (state: ProgramsState) => state.programsList.programsList;

export const selectProgramState = createFeatureSelector<fromPrograms.ProgramsState>("programs");

export const { selectAll: selectAllPrograms } = fromPrograms.programAdapter.getSelectors(
  selectProgramState
);


