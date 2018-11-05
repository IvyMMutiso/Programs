import { Moment } from "moment";
export class Activity {
  constructor(initialData: Partial<Activity> = null) {
    if (initialData != null) {
      Object.assign(this, initialData);
    }
  }

  id: number;
  name: string;
  expected_start_date: Moment;
  expected_end_date: Moment;
  workflowlevel1: string;
  progress: string;
  status: string;
}
