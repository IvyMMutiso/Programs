import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProgramsListComponent } from "./components/programs-list/programs-list.component";

const routes: Routes = [
  { path: "", redirectTo: "programs", pathMatch: "full" },
  { path: "programs", component: ProgramsListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
