import { Program } from "./modules/programs/models/program";
import { Activity } from "./modules/activities/models/activity";

export interface AppState {
  readonly programs: Program[];
  readonly activities: Activity[];
}
