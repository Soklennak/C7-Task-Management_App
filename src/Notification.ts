import { User } from "./User";
import { Task } from "./Task";

export class Notification{
    private user: User;
    private task: Task;
    private message: string;
    private read: boolean = false;
    static notifications: Notification[] = [];
    
    constructor(user: User, task: Task, message: string){
        this.user = user;
        this.task = task;
        this.message = message;
        Notification.notifications.push(this);
    }

    public sendTo(user: User, task: Task, message: string): void {
        new Notification(user, task, message);
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

    public isRead(): boolean {
        return this.read;
    }

}