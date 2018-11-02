// import * as ProgramActions from "./../actions/programs.actions";
import { Program } from "./../models/program";
import { ProgramsListActions, ProgramsListActionType } from "../actions/programs.actions";

// const initialState: Program = {
//   name: "Initial Tutorial",
//   id: 1
// };

export function programsListReducer(state: Program[], action: ProgramsListActions) {
  switch (action.type) {
    case ProgramsListActionType.GET_PROGRAMS_LIST:
      return [...state];

    case ProgramsListActionType.GET_PROGRAMS_LIST_SUCCESS:
      return [...state, action.payload];

    default:
      return state;
  }
}
