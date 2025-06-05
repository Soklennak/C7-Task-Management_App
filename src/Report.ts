import { Project } from "./Project";
import { Task } from "./Task";
import { Status } from "./EnumStatus";

export class Report {
  constructor(private project: Project) {}

  private isMissed(task: Task): boolean {
    return task.getStatus() !== Status.COMPLETED && task.getDueDate() < new Date();
  }

  generate(): void {
    const tasks = this.project.getTasks();
    const completed = tasks.filter(task => task.getStatus() === Status.COMPLETED);
    const missed = tasks.filter(task => this.isMissed(task));
    const delegated = tasks.filter(task => task.getDelegatedTo() !== undefined);

    console.log(`\n📊 Productivity Report for Project: "${this.project.getName()}"`);
    console.log(`✅ Completed Tasks: ${completed.length}`);
    console.log(`❌ Missed Tasks: ${missed.length}`);
    console.log(`📤 Delegated Tasks: ${delegated.length}`);

    console.log("\nDetails:");

    completed.forEach(task =>
      console.log(`✔️ [${task.getTitle()}] - Completed.`)
    );
    missed.forEach(task =>
      console.log(`⚠️ [${task.getTitle()}] - Missed. Due: ${task.getDueDate().toDateString()}`)
    );
    delegated.forEach(task =>
      console.log(`➡️ [${task.getTitle()}] - Delegated to ${task.getDelegatedTo()}.`)
    );
  }

  getReportText(): string {
    const tasks = this.project.getTasks();
    const completed = tasks.filter(task => task.getStatus() === Status.COMPLETED);
    const missed = tasks.filter(task => this.isMissed(task));
    const delegated = tasks.filter(task => task.getDelegatedTo() !== undefined);

    let report = `Productivity Report for Project: ${this.project.getName()}\n`;
    report += `Completed Tasks: ${completed.length}\n`;
    report += `Missed Tasks: ${missed.length}\n`;
    report += `Delegated Tasks: ${delegated.length}\n\n`;

    report += `--- Completed Tasks ---\n`;
    completed.forEach(task => (report += `✔️ ${task.getTitle()}\n`));

    report += `\n--- Missed Tasks ---\n`;
    missed.forEach(
      task => (report += `⚠️ ${task.getTitle()} (Due: ${task.getDueDate().toDateString()})\n`)
    );

    report += `\n--- Delegated Tasks ---\n`;
    delegated.forEach(
      task => (report += `➡️ ${task.getTitle()} → ${task.getDelegatedTo()}\n`)
    );

    return report;
  }
}
