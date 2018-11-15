import { Action } from "@ngrx/store";
import { Activity } from "../models/activity";

export enum ActivitiesActionType {
  GetActivitiesList = "[Activities] Get All Program Activities",
  GetActivitiesListSuccess = "[Activities] Get All Program Activities Success",
  AddActivity = "[Activities] Add Program Activity",
  AddActivitySuccess = "[Activities] Add Program Activity Success",
  DeleteActivity = "[Activities] Delete Program Activity",
  DeleteActivitySuccess = "[Activities] Delete Program Activity Success"
}

export class GetActivitiesList implements Action {
  readonly type = ActivitiesActionType.GetActivitiesList;
  constructor(public payload: number) {}
}

export class GetActivitiesListSuccess implements Action {
  readonly type = ActivitiesActionType.GetActivitiesListSuccess;
  constructor(public payload: Activity[]) {}
}

export class AddActivity implements Action {
  readonly type = ActivitiesActionType.AddActivity;
  constructor(public payload: Activity) {}
}

export class AddActivitySuccess implements Action {
  readonly type = ActivitiesActionType.AddActivitySuccess;
  constructor(public payload: Activity) {}
}

export class DeleteActivity implements Action {
  readonly type = ActivitiesActionType.DeleteActivity;
  constructor(public payload: number) {}
}

export class DeleteActivitySuccess implements Action {
  readonly type = ActivitiesActionType.DeleteActivitySuccess;
  // constructor(public payload: number) {}
  constructor(public payload: Activity[]) {}
}

export type ActivitiesListActions =
  | GetActivitiesList
  | GetActivitiesListSuccess
  | AddActivity
  | AddActivitySuccess
  | DeleteActivity
  | DeleteActivitySuccess;
