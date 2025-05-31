import { Task } from "./Task";

export class Label {
  private name: string;
  private tasks: Task[] = [];

  constructor(name: string) {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }

  public addTask(task: Task): void {
    if (!this.tasks.includes(task)) {
      this.tasks.push(task);
      task.addLabel(this); // maintain two-way link
    }
  }

  public getTasks(): Task[] {
    return this.tasks;
  }
}
