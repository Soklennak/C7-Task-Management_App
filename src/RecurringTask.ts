import { Task } from "./Task";
import { Status } from "./Enums/EnumStatus";

export class RecurringTask {
  private task: Task;
  private repeatInterval: "daily" | "weekly" | "monthly";
  private nextOccurrence: Date;

  constructor(
    task: Task,
    repeatInterval: "daily" | "weekly" | "monthly",
    nextOccurrence: Date
  ) {
    this.task = task;
    this.repeatInterval = repeatInterval;
    this.nextOccurrence = nextOccurrence;
  }

  public getTask(): Task {
    return this.task;
  }

  public getNextOccurrence(): Date {
    return this.nextOccurrence;
  }

  public updateNextOccurrence(): void {
    const newDate = new Date(this.nextOccurrence);
    switch (this.repeatInterval) {
      case "daily":
        newDate.setDate(newDate.getDate() + 1);
        break;
      case "weekly":
        newDate.setDate(newDate.getDate() + 7);
        break;
      case "monthly":
        newDate.setMonth(newDate.getMonth() + 1);
        break;
    }
    this.nextOccurrence = newDate;
    this.task.updateTask(
      this.task.getTitle(),
      this.task.getDescription(),
      newDate
    );
  }

  public static generateNextTask(current: RecurringTask): RecurringTask {
    const oldTask = current.getTask();
    const newDueDate = current.getNextOccurrence();

    const newTask = new Task(
      oldTask.getId() + 1, // You may want to replace this with an auto-generated ID system
      oldTask.getTitle(),
      oldTask.getDescription(),
      newDueDate,
      Status.PENDING
    );

    return new RecurringTask(newTask, current.repeatInterval, newDueDate);
  }
}
