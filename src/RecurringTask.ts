import { Task } from "./Task";
import { Status } from "./EnumStatus";
import { Priority } from "./EnumPriority";

export class RecurringTask extends Task {
  private recurrencePattern: string; // e.g. "daily", "weekly", "monthly"
  private nextOccurrence: Date;

  constructor(
    id: number,
    title: string,
    description: string,
    dueDate: Date,
    priority: Priority,
    status: Status,
    recurrencePattern: string,
    nextOccurrence: Date
  ) {
    super(id, title, description, dueDate, priority, status);
    this.recurrencePattern = recurrencePattern;
    this.nextOccurrence = nextOccurrence;
  }

  public getRecurrencePattern(): string {
    return this.recurrencePattern;
  }

  public getNextOccurrence(): Date {
    return this.nextOccurrence;
  }

  public updateNextOccurrence(): void {
    const next = new Date(this.nextOccurrence);

    switch (this.recurrencePattern.toLowerCase()) {
      case "daily":
        next.setDate(next.getDate() + 1);
        break;
      case "weekly":
        next.setDate(next.getDate() + 7);
        break;
      case "monthly":
        next.setMonth(next.getMonth() + 1);
        break;
      default:
        throw new Error("Invalid recurrence pattern");
    }

    this.nextOccurrence = next;
  }
}
