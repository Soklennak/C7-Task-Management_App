// Assuming Task is already defined somewhere
import { Task } from "./Task";

export class Reminder {
  private task: Task;
  private notifyDate: Date;

  constructor(task: Task, notifyDate: Date) {
    this.task = task;
    this.notifyDate = notifyDate;
  }

  public setReminder(date: Date): void {
    this.notifyDate = date;
  }

  public getUpcomingTasks(): Task[] {
    const now = new Date();
    // If notifyDate is in the future, return the task
    if (this.notifyDate > now) {
      return [this.task];
    }
    return [];
  }

  public cancelReminder(): void {
    // Set to a past date to represent cancellation
    this.notifyDate = new Date(0); // Epoch
  }

  public getNotifyDate(): Date {
    return this.notifyDate;
  }

  public getTask(): Task {
    return this.task;
  }
}
