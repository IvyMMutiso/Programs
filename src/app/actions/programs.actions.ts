import { Action } from "@ngrx/store";
import { Program } from "./../models/program";

export enum ProgramsListActionType {
  GET_PROGRAMS_LIST = "[Programs] Get All Programs",
  GET_PROGRAMS_LIST_SUCCESS = "[Programs] Get All Programs Success",
  ADD_TUTORIAL = "[TUTORIAL] Add",
  REMOVE_TUTORIAL = "[TUTORIAL] Remove"
}

// export const GET_PROGRAMS_LIST = "[Programs] Get All Programs";
// export const GET_PROGRAMS_LIST_SUCCESS = "[Programs] Get All Programs Success";
// export const ADD_TUTORIAL       = "[TUTORIAL] Add";
// export const REMOVE_TUTORIAL    = "[TUTORIAL] Remove";

// Section 3
export class AddTutorial implements Action {
  readonly type = ProgramsListActionType.ADD_TUTORIAL;
  constructor(public payload: Program[]) {}
}

export class RemoveTutorial implements Action {
  readonly type = ProgramsListActionType.REMOVE_TUTORIAL;
  constructor(public payload: number) {}
}

export class GetProgramsList implements Action {
  readonly type = ProgramsListActionType.GET_PROGRAMS_LIST;
  constructor(public payload: Program[]) {}
}

export class GetProgramsListSuccess implements Action {
  readonly type = ProgramsListActionType.GET_PROGRAMS_LIST_SUCCESS;
  constructor(public payload: Program[]) {}
}

export type ProgramsListActions =
  | GetProgramsList
  | GetProgramsListSuccess
  | AddTutorial
  | RemoveTutorial;
