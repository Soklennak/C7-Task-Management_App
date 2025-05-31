import { Task } from "./Task";
import { User } from "./User";

export class Comment {
    private user: User;
    private task: Task;
    private content: string;

    constructor(user: User, task: Task, content: string) {
        this.user = user;
        this.task = task;
        this.content = content;
    }

    public getUser(): User {
        return this.user;
    }

    public getTask(): Task {
        return this.task;
    }

    public getContent(): string {
        return this.content;
    }

    public setContent(content: string): void {
        this.content = content;
    }


}