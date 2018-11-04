import { Action } from "@ngrx/store";
import { Activity } from "../models/activity";

export enum ActivitiesActionType {
  GetActivitiesList = "[Activities] Get All Program Activities",
  GetActivitiesListSuccess = "[Activities] Get All Program Activities Success",
}

export class GetActivitiesList implements Action {
  readonly type = ActivitiesActionType.GetActivitiesList;
  constructor(public payload: number) {}
}

export class GetActivitiesListSuccess implements Action {
  readonly type = ActivitiesActionType.GetActivitiesListSuccess;
  constructor(public payload: Activity[]) {}
}

export type ActivitiesListActions =
  | GetActivitiesList
  | GetActivitiesListSuccess;
