import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StoreModule } from "@ngrx/store";
import { programsReducer } from "./reducers/programs.reducer";

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature("programs", programsReducer)
  ],
  declarations: []
})
export class ProgramsModule { }
