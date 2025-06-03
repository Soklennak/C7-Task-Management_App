import { Comment } from "./Comment";
import { Status } from "./EnumStatus";
import { User } from "./User";
import { Label } from "./Labels";
import { Attachment } from "./Attachment";

export class Task {
  assignTo(user: User) {
    throw new Error("Method not implemented.");
  }
  private static allTasks: Task[] = [];
  private id: number;
  private title: string;
  private description: string;
  private dueDate: Date;
  private status: Status;
  private comments: Comment[] = [];
  private labels: Label[] = [];
  private attachments: Attachment[] = [];

  constructor(
    id: number,
    title: string,
    description: string,
    dueDate: Date,
    status: Status
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.status = status;
    Task.allTasks.push(this);
  }

  public getId(): number {
    return this.id;
  }

  public getTitle(): string {
    return this.title;
  }

  public getDescription(): string {
    return this.description;
  }

  public getDueDate(): Date {
    return this.dueDate;
  }

  public getStatus(): string {
    return this.status;
  }

  public updateStatus(newStatus: Status): void {
    this.status = newStatus;
  }

  public uppdateTask(title: string, description: string, dueDate: Date): void {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
  }

  // Get all tasks
  public static getAllTasks(): Task[] {
    return Task.allTasks;
  }

  // Add comment to task
  public addComment(comment: Comment): void {
    this.comments.push(comment);
  }

  // Get all comments
  public getComments(): Comment[] {
    return this.comments;
  }
  public addLabel(label: Label): void {
    if (!this.labels.includes(label)) {
      this.labels.push(label);
    }
  }

  public getLabels(): Label[] {
    return this.labels;
  }

    // Add this method to add an attachment
    public addAttachment(attachment: Attachment): void {
        this.attachments.push(attachment);
    }

    // Add this method to retrieve attachments
    public getAttachments(): Attachment[] {
        return this.attachments;
    }
}
