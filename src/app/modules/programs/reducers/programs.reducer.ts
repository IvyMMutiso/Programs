import {
  ProgramsListActions,
  ProgramsListActionType
} from "../actions/programs.actions";
import { Program } from "../models/program";
import { createEntityAdapter, EntityState, EntityAdapter } from "@ngrx/entity";

// export const programAdapter: EntityAdapter<Program> = createEntityAdapter<Program>();
// export interface ProgramsState extends EntityState<Program> { }
// export const initialState: ProgramsState = programAdapter.getInitialState();

// export interface ProgramsState {
//     programsList: Array<Program>;
// }

// export const initialState: ProgramsState = {
//     programsList: null
// };

export interface ProgramsState extends EntityState<Program> {
  programs: Array<Program>;
}

export const programAdapter: EntityAdapter<Program> = createEntityAdapter<Program>();

export const initialState: ProgramsState = programAdapter.getInitialState({
  programs: null
});

export function programsReducer(
  state = initialState,
  action: ProgramsListActions
): ProgramsState {
  switch (action.type) {
    case ProgramsListActionType.GetProgramsList: {
      return { ...state };
    }
    case ProgramsListActionType.GetProgramsListSuccess: {
      // return {...state, programsList: action.payload };
      return programAdapter.addAll(action.payload, state);
    }
    default: {
      return state;
    }
  }
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = programAdapter.getSelectors();

