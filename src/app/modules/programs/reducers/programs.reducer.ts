import { ProgramsListActions, ProgramsListActionType } from "../actions/programs.actions";
import { Program } from "../models/program";

export interface ProgramsState {
    programsList: Array<Program>;
}

export const initialState: ProgramsState = {
    programsList: null
};

export function programsReducer(state = initialState, action: ProgramsListActions ): ProgramsState {
    switch (action.type) {
        case ProgramsListActionType.GetProgramsList: {
            return {...state };
        }
        case ProgramsListActionType.GetProgramsListSuccess: {
            return {...state, programsList: action.payload };
        }
        default: {
            return state;
        }
    }
}

// export const GetProgramsList = (state: ProgramsState) => state.programsList;

