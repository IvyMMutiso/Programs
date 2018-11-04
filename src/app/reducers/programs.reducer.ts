import { Program } from "./../models/program";
import { ProgramsListActions, ProgramsListActionType } from "../actions/programs.actions";

export interface State {
    programsList: Program[];
}

export const initialState: State = {
    programsList: null
};

export function programsListReducer(state = initialState, action: ProgramsListActions  ): State {
    switch (action.type) {
        case ProgramsListActionType.GET_PROGRAMS_LIST: {
            return {...state, programsList: action.payload };
        }
        case ProgramsListActionType.GET_PROGRAMS_LIST_SUCCESS: {
            return {...state, programsList: action.payload };
        }
        default: {
            return state;
        }
    }
}
