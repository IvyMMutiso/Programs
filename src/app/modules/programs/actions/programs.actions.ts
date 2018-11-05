import { Action } from "@ngrx/store";
import { Program } from "src/app/modules/programs/models/program";

export enum ProgramsListActionType {
  GetProgramsList = "[Programs] Get All Programs",
  GetProgramsListSuccess = "[Programs] Get All Programs Success",
}

export class GetProgramsList implements Action {
  readonly type = ProgramsListActionType.GetProgramsList;
  // constructor(public payload: Program[]) {}
}

export class GetProgramsListSuccess implements Action {
  readonly type = ProgramsListActionType.GetProgramsListSuccess;
  constructor(public payload: Program[]) {}
}

export type ProgramsListActions =
  | GetProgramsList
  | GetProgramsListSuccess;
