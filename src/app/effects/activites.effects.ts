import { Injectable } from "@angular/core";
import { Action } from "@ngrx/store";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Observable } from "rxjs/Observable";
import { switchMap, map, catchError } from "rxjs/operators";
import { ProgramsService } from "../service/programs.service";
import { of } from "rxjs";
import { ActivitiesActionType, GetActivitiesListSuccess, GetActivitiesList } from "../actions/activities.actions";
import { Activity } from "../models/activity";

@Injectable()
export class ActivitiesEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly service: ProgramsService
  ) {}

  @Effect()
  getActivitiesList$: Observable<Action> = this.actions$.pipe(
        ofType(ActivitiesActionType.GetActivitiesList),
        switchMap((action: GetActivitiesList) => this.service.getProgramActivities(action.payload)
            .pipe(
                map((data: Array<Activity>) => new GetActivitiesListSuccess(data)),
                catchError(error => of(error))
            )
        )
    );
}

