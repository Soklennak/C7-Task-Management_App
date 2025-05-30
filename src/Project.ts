import { Task } from "./Task";
import { User } from "./User";
export class Project {
  private id: number;
  private name: string;
  private description: string;
  private tasks: Task[] = [];
  private createdBy: User;

  constructor(id: number, name: string, description: string, createdBy: User) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.createdBy = createdBy;
  }

  public getId(): number {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public getDescription(): string {
    return this.description;
  }

  public getTasks(): Task[] {
    return this.tasks;
  }

  public getCreator(): User {
    return this.createdBy;
  }

  public addTask(task: Task): void {
    this.tasks.push(task);
  }

  public removeTask(task: Task): void {
    this.tasks = this.tasks.filter(t => t !== task);
  }
}
