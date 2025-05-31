import { User } from "./User";

export class Task {
    assignTo(user: User) {
        throw new Error("Method not implemented.");
    }
    private static allTasks: Task[] = [];
    private id: number;
    private title: string;
    private description: string;
    private dueDate: Date;
    private status: string;

    constructor(id: number,title: string, description: string, dueDate: Date, status: string) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.status = status;
        Task.allTasks.push(this);
    }

    public getId(): number {
        return this.id;
    }

    public getTitle(): string {
        return this.title;
    }

    public getDescription(): string {
        return this.description;
    }

    public getDueDate(): Date {
        return this.dueDate;
    }

    public getStatus(): string {
        return this.status;
    }

    public updateStatus(newStatus: string): void {
        this.status = newStatus;
    }

    public uppdateTask(title: string, description: string, dueDate: Date): void {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
    }

    // Get all tasks
    public static getAllTasks(): Task[] {
        return Task.allTasks;
    }
}