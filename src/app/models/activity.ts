export class Activity {
    constructor(initialData: Partial<Activity> = null) {
        if (initialData != null) {
            Object.assign(this, initialData);
        }
    }

    id: number;
    name: string;
    createdate: Date;
    enddate: Date;
}
