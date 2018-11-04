import { Program } from "./models/program";
import { Activity } from "./models/activity";

export interface AppState {
  readonly programs: Program[];
  readonly activities: Activity[];
}
