import { Action } from "@ngrx/store";
import { Program } from "./../models/program";

export enum ProgramsListActionType {
  GET_PROGRAMS_LIST = "[Programs] Get All Programs",
  GET_PROGRAMS_LIST_SUCCESS = "[Programs] Get All Programs Success",
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
  | GetProgramsListSuccess;
