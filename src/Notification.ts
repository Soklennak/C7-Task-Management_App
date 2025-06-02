import { User } from "./User";
import { Task } from "./Task";

export class Notification{
    private user: User;
    private task: Task;
    private message: string;
    private timestamp: Date = new Date();
    private read: boolean = false;
    static notifications: Notification[] = [];
    
    constructor(user: User, task: Task, message: string, timestamp: Date) {
        this.user = user;
        this.task = task;
        this.message = message;
        this.timestamp = new Date();
        Notification.notifications.push(this);
    }

    public sendTo(user: User, task: Task, message: string, timestamp: Date): void {
        new Notification(user, task, message, timestamp);
    }

    public static getAllForUser(user: User): Notification[] {
        return Notification.notifications.filter((n: Notification) => n.getUser() === user);
    }

    public markAsRead(): void{
        this.read = true;
    }
    
    public getUser(): User {
        return this.user;
    }

    public getTask(): Task {
        return this.task;
    }

    public getMessage(): string {
        return this.message;
    }

    public getTimestamp(): Date {
        return this.timestamp;
    }

    public isRead(): boolean {
        return this.read;
    }

}