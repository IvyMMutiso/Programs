import { Injectable } from "@angular/core";
import { Action } from "@ngrx/store";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Observable } from "rxjs/Observable";
import { switchMap, map, catchError } from "rxjs/operators";
import {
  GetProgramsListSuccess,
  ProgramsListActionType
} from "../actions/programs.actions";
import { of } from "rxjs";
import { Program } from "../models/program";
import { ProgramsService } from "../../shared/service/programs.service";

@Injectable()
export class ProgramEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly service: ProgramsService
  ) {}

  @Effect()
  getProgramsList$: Observable<Action> = this.actions$.pipe(
    ofType(ProgramsListActionType.GetProgramsList),
    switchMap(() =>
      this.service.getPrograms().pipe(
        map((programs: Program[]) => new GetProgramsListSuccess(programs)),
        catchError(error => of(error))
      )
    )
  );
}
