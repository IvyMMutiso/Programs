import { Injectable } from "@angular/core";
import { Action } from "@ngrx/store";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Observable } from "rxjs/Observable";
import { switchMap, map, catchError } from "rxjs/operators";
import { ProgramsService } from "../service/programs.service";
import { GetProgramsListSuccess, ProgramsListActionType } from "../actions/programs.actions";
import { Program } from "../models/program";
import { of } from "rxjs";

@Injectable()
export class ProgramEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly service: ProgramsService
  ) {}

  @Effect()
  getEntity$: Observable<Action> = this.actions$.pipe(
    ofType(ProgramsListActionType.GET_PROGRAMS_LIST),
    switchMap(() => this.service.getPrograms().pipe(
        map((programs: Program[]) => new GetProgramsListSuccess(programs)),
        catchError(error => of(error))
      )
    )
  );
}
