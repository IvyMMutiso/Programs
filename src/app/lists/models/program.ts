export class Program {
    constructor(initialData: Partial<Program> = null) {
        if (initialData != null) {
            Object.assign(this, initialData);
        }
    }

    id: number;
    name: string;
}
