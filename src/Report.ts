import { Project } from "./Project";
import { Task } from "./Task";
import { Status } from "./EnumStatus";

export class Report {
  constructor(private project: Project) {}

  getCompletedTasks(): Task[] {
    return this.project.getTasks().filter(task => task.getStatus() === Status.COMPLETED);
  }

  getPendingTasks(): Task[] {
    return this.project.getTasks().filter(task => {
      const status = task.getStatus();
      return status === Status.PENDING || status === Status.INPROGRESS;
    });
  }

  getMissedTasks(): Task[] {
    return this.project.getTasks().filter(task => task.getStatus() === Status.MISSED);
  }

  getDelegatedTasks(): Task[] {
    return this.project.getTasks().filter(task => task.getStatus() === Status.DELEGATED);
  }

  generate(): void {
    console.log(`== Report for Project: ${this.project.getName()} ==`);
     
    console.log("\n✔️ Completed Tasks:");
    this.getCompletedTasks().forEach(task =>
      console.log(`- ${task.getTitle()} (ID: ${task.getId()})`)
    );

    console.log("\n⏳ Pending Tasks:");
    this.getPendingTasks().forEach(task =>
      console.log(`- ${task.getTitle()} (ID: ${task.getId()})`)
    );
  }

  generateSummary(): void {
    const completedCount = this.getCompletedTasks().length;
    const missedCount = this.getMissedTasks().length;
    const delegatedCount = this.getDelegatedTasks().length;
    console.log(`✔️ Completed Tasks: ${completedCount}`);
    console.log(`❌ Missed Tasks: ${missedCount}`);
    console.log(`📤 Delegated Tasks: ${delegatedCount}`);
  }
}
