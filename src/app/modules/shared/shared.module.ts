import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProgramsService } from "./service/programs.service";
import { StoreModule } from "@ngrx/store";
import * as fromProgramsReducers from "../programs/reducers";
import * as fromActivitiesReducers from "../activities/reducers";

@NgModule()
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: RootSharedModule,
      providers: [ProgramsService]
    };
  }
}

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature("programs", fromProgramsReducers.programsReducer),
    StoreModule.forFeature("activities", fromActivitiesReducers.activitiesReducers)
  ],
  declarations: []
})

export class RootSharedModule { }



