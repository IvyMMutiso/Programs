import { Program } from "./lists/models/program";
import { Activity } from "./lists/models/activity";

export interface AppState {
  readonly programs: Program[];
  readonly activities: Activity[];
}
