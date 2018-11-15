import { Injectable } from "@angular/core";
import { Action } from "@ngrx/store";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Observable } from "rxjs/Observable";
import { switchMap, map, catchError } from "rxjs/operators";
import { of } from "rxjs";
import {
  ActivitiesActionType,
  GetActivitiesListSuccess,
  GetActivitiesList,
  AddActivity,
  AddActivitySuccess,
  DeleteActivitySuccess,
  DeleteActivity
} from "../actions/activities.actions";
import { Activity } from "../models/activity";
import { ProgramsService } from "../../shared/service/programs.service";

@Injectable()
export class ActivitiesEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly service: ProgramsService
  ) {}

  @Effect()
  getActivitiesList$: Observable<Action> = this.actions$.pipe(
    ofType(ActivitiesActionType.GetActivitiesList),
    switchMap((action: GetActivitiesList) =>
      this.service.getProgramActivities(action.payload).pipe(
        map((data: Array<Activity>) => new GetActivitiesListSuccess(data)),
        catchError(error => of(error))
      )
    )
  );

  @Effect()
  addActivity$: Observable<Action> = this.actions$.pipe(
    ofType(ActivitiesActionType.AddActivity),
    switchMap((action: AddActivity) =>
      this.service.addProgramActivity(action.payload).pipe(
        map((data: Activity) => new AddActivitySuccess(data)),
        catchError(error => of(error))
      )
    )
  );

  @Effect()
  deleteActivity$: Observable<Action> = this.actions$.pipe(
    ofType(ActivitiesActionType.DeleteActivity),
    switchMap((action: DeleteActivity) =>
      this.service.deleteProgramActivity(action.payload).pipe(
        map((data: Activity[]) => new DeleteActivitySuccess(data)),
        catchError(error => of(error))
      )
    )
  );
}
