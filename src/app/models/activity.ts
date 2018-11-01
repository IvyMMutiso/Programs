export class Activity {
    constructor(initialData: Partial<Activity> = null) {
        if (initialData != null) {
            Object.assign(this, initialData);
        }
    }

    id: number;
    name: string;
    expected_start_dtae: Date;
    expected_end_date: Date;
    workflowlevel1: string;
}
