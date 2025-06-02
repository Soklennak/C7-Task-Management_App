import { Label } from "./Labels";
import { Task } from "./Task";
import { User } from "./User";

export abstract class Dashboard {
    private static allUsers: User[] = [];
    private static allTasks: Task[] = [];
    private static allLabels: Label[] = [];
    private static allComments: Comment[] = [];

    public static addUser(user: User): void {
        this.allUsers.push(user);
    }

    public static addTask(task: Task): void {
        this.allTasks.push(task);
    }

    public static addLabel(label: Label): void {
        this.allLabels.push(label);
    }

    public static addComment(comment: Comment): void {
        this.allComments.push(comment);
    }

    public static getAllUsers(): User[] {
        return this.allUsers;
    }

    public static getAllTasks(): Task[] {
        return this.allTasks;
    }

    public static getAllLabels(): Label[] {
        return this.allLabels;
    }

    public static getAllComments(): Comment[] {
        return this.allComments;
    }
}