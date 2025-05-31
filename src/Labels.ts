// Label.ts
import { Task } from "./Task";

export class Label {
  private name: string;
  private task: Task;

  constructor(name: string, task: Task) {
    this.name = name;
    this.task = task;
  }

  public getName(): string {
    return this.name;
  }

  public getTask(): Task {
    return this.task;
  }
}
