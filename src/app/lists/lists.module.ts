import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProgramsService } from "./service/programs.service";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { ActivitiesEffects } from "./effects/activites.effects";
import { ProgramEffects } from "./effects/programs.effects";
import * as fromReducers from "./reducers";

@NgModule()
export class ListsModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: RootListsModule,
      providers: [ProgramsService]
    };
  }
}

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature("programs", fromReducers.programsReducer),
    StoreModule.forFeature("activities", fromReducers.activitiesReducers),
    EffectsModule.forFeature([ProgramEffects, ActivitiesEffects])
  ],
  declarations: []
})

export class RootListsModule { }


