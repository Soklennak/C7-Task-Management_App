import { Task } from "./Task";
import { User } from "./User";
import { Reminder } from "./Reminder";
import { Project } from "./Project";
import { Label } from "./Labels";
import { Priority } from "./Enums/EnumPriority";  
import { Status } from "./Enums/EnumStatus";
import { Dashboard } from "./Dashboard";
import { Report } from "./Report";
import { Notification } from "./Notification";
import { Attachment } from "./Attachment";
import { RecurringTask } from "./RecurringTask";

// Create Users
let chhorrina = new User(
  "Chhorrina",
  "1234567890",
  "rian@.com",
  "password123",
  "273, Sorla"
);
let soklen = new User(
  "Soklen",
  "0987654321",
  "soklen@.com",
  "password456",
  "123, Sorla"
);
let bunyoung = new User(
  "Bunyoung",
  "1122334455",
  "bunyoung@.com",
  "password789",
  "456, Sorla"
);

console.log(`✅ ${chhorrina.getName()} has logged in.`);

// Create Project
let oopProject = chhorrina.addProject(
  1,
  "OOP Project",
  "A task management app built with OOP principles."
);
console.log(`📁 Project created: ${oopProject.getName()}`);

// Create Tasks
let task1 = new Task(
  1,
  "Team",
  "Team can have many projects",
  new Date("2025-06-01"),
  Status.PENDING
);
let task2 = new Task(
  2,
  "Dashboard",
  "Show dashboard of user",
  new Date("2025-06-02"),
  Status.INPROGRESS
);
let task3 = new Task(
  3,
  "SpecialTask",
  "Task for volunteer event",
  new Date("2025-06-03"),
  Status.PENDING
);
let task4 = new Task(
  4,
  "UrgentReport",
  "Task for QA",
  new Date("2025-06-05"),
  Status.COMPLETED
);
let task5 = new Task(
  4,
  "Setup Repo",
  "Initialize GitHub repository",
  new Date("2025-06-05"),
  Status.COMPLETED
);

// set dailyBaseTask
let dailyBaseTask = new Task(
  2001,
  "Daily Standup",
  "Quick daily team sync",
  new Date("2025-06-06"), // today's date
  Status.PENDING
);
task3.setDelegatedTo("soklen@.com");
// Add Tasks to Project----
oopProject.addTask(task1);
oopProject.addTask(task2);
oopProject.addTask(task3);
oopProject.addTask(task4);
oopProject.addTask(task5);
console.log(
  `📝 Tasks have been added to the project "${oopProject.getName()}".`
);

// Display All Tasks
console.log("\n📋 All tasks in the project:");
Task.getAllTasks().forEach((task) => {
  console.log(
    `- ${task.getTitle()} [Due: ${task
      .getDueDate()
      .toDateString()}] - Status: ${task.getStatus()}`
  );
});

// Add Team Name and Members
chhorrina.addTeamName("Task Management Team");
chhorrina.addTeamMember(soklen);
console.log(
  `👥 Team member added: ${soklen.getName()} to project "${oopProject.getName()}"`
);

// Add Comments to Tasks
chhorrina.addCommentToTask(
  task1,
  "This is a critical task. Please prioritize it."
);
soklen.addCommentToTask(task2, "I will work on this task next week.");
bunyoung.addCommentToTask(task1, "I have completed my part of the task.");

// Display Comments-----------------------
Task.getAllTasks().forEach((task) => {
  const comments = task.getComments();
  console.log(`\n📌 Task: ${task.getTitle()}`);
  if (comments.length > 0) {
    comments.forEach((comment) => {
      console.log(`- ${comment.getUser().getName()}: ${comment.getContent()}`);
    });
  } else {
    console.log("- No comments yet.");
  }
});

//  Reminder for Task----------------------
let reminder = new Reminder(task1, new Date("2025-06-04"));
console.log(
  `⏰ Reminder set for task "${task1.getTitle()}" on ${reminder
    .getNotifyDate()
    .toDateString()}.`
);

// Upcoming Tasks-----------------------
let upcomingTasks = reminder.getUpcomingTasks();
if (upcomingTasks.length > 0) {
  console.log("\n🔔 Upcoming tasks:");
  upcomingTasks.forEach((task) => {
    console.log(
      `- ${task.getTitle()} [Due: ${task.getDueDate().toDateString()}]`
    );
  });
}

// Cancel Reminder
reminder.cancelReminder();

// Show Tasks After Reminder Cancelled
console.log("\n📋 All tasks in the project after reminder cancellation:");
Task.getAllTasks().forEach((task) => {
  console.log(
    `- ${task.getTitle()} [Due: ${task
      .getDueDate()
      .toDateString()}] - Status: ${task.getStatus()}`
  );
});
//  Recurring task---------
const dailyMeeting = new RecurringTask(
  dailyBaseTask,
  "daily",
  new Date("2025-06-06")
);
console.log("\n📅 DAILY RECURRING TASK TEST");
console.log(`📌 Base Task: ${dailyMeeting.getTask().getTitle()}`);
console.log(
  `⏰ Due Date: ${dailyMeeting.getTask().getDueDate().toDateString()}`
);
console.log(
  `🔁 Next Occurrence: ${dailyMeeting.getNextOccurrence().toDateString()}`
);

dailyMeeting.updateNextOccurrence();
console.log("\n📅 After updating daily task:");
console.log(
  `⏭️ New Due Date: ${dailyMeeting.getTask().getDueDate().toDateString()}`
);
console.log(
  `🔁 Next Occurrence Updated: ${dailyMeeting
    .getNextOccurrence()
    .toDateString()}`
);

const nextDaily = RecurringTask.generateNextTask(dailyMeeting);

console.log("\n📆 New Daily Recurring Task :");
console.log(`📝 Task Title: ${nextDaily.getTask().getTitle()}`);
console.log(`📆 Due Date: ${nextDaily.getTask().getDueDate().toDateString()}`);
console.log(
  `🔁 Next Occurrence: ${nextDaily.getNextOccurrence().toDateString()}`
);
// Labels---------------------------------------
const labelUrgent = new Label("URGENT");
const labelHome = new Label("HOME");
const labelWork = new Label("WORK");

labelUrgent.addTask(task1);
labelUrgent.addTask(task4);
labelHome.addTask(task2);
labelWork.addTask(task3);

console.log("\n🏷️ All labels and their tasks:");
const allLabels = [labelUrgent, labelHome, labelWork];
allLabels.forEach((label) => {
  console.log(`- ${label.getName()}:`);
  label.getTasks().forEach((task) => {
    console.log(`   • ${task.getTitle()}`);
  });
});

// Dashboard Summary---------------------------------
console.log("\n📊 DASHBOARD SUMMARY");

// USERS
console.log("\n👤 USERS:");
Dashboard.getAllUsers().forEach((user) => {
  console.log(`- ${user.getName()}`);
});

// PROJECTS
console.log("\n📁 PROJECTS:");
console.log(
  `- ${oopProject.getName()} (${oopProject.getTasks().length} tasks)`
);

// TASKS
console.log("\n📝 TASKS:");
Task.getAllTasks().forEach((task) => {
  console.log(
    `- ${task.getTitle()} [Due: ${task
      .getDueDate()
      .toDateString()}] - Status: ${task.getStatus()}`
  );
});

// COMMENTS
console.log("\n💬 TASK COMMENTS:");
Task.getAllTasks().forEach((task) => {
  const comments = task.getComments();
  if (comments.length > 0) {
    console.log(`📌 ${task.getTitle()}:`);
    comments.forEach((comment) => {
      console.log(
        `   - ${comment.getUser().getName()}: ${comment.getContent()}`
      );
    });
  }
});

// LABELS
console.log("\n🏷️ LABELS & TASKS:");
Dashboard.getAllLabels().forEach((label) => {
  console.log(`- ${label.getName()}:`);
  label.getTasks().forEach((task) => {
    console.log(`   • ${task.getTitle()}`);
  });
});

// Notifications
new Notification(
  chhorrina,
  task1,
  "📝 A new task 'Finish UI' has been assigned to you.",
  new Date("2025-06-03")
);
new Notification(
  soklen,
  task2,
  "🐞 Bug fixing task has been added.",
  new Date("2025-06-02")
);
new Notification(
  chhorrina,
  task2,
  "🚨 Task 'Fix Bugs' has been updated.",
  new Date("2025-06-09")
);

console.log(`\n🔔 Notifications for ${chhorrina.getName()}:`);
Notification.getAllForUser(chhorrina).forEach((n, index) => {
  console.log(
    `${index + 1}. ${n.getMessage()} [Task: ${n
      .getTask()
      .getTitle()}] - Read: ${n.isRead()}`
  );
});

// Mark Notification as Read
const userNotifs = Notification.getAllForUser(chhorrina);
if (userNotifs.length > 0) {
  userNotifs[0].markAsRead();
  console.log(
    `\n✅ Marked first notification as read for ${chhorrina.getName()}`
  );
}

// Show Updated Notifications
console.log(`\n📩 Updated Notifications for ${chhorrina.getName()}:`);
Notification.getAllForUser(chhorrina).forEach((n, index) => {
  console.log(`${index + 1}. ${n.getMessage()} - Read: ${n.isRead()}`);
});

// ---------------------------Attachments---------------------------------
const attachment1 = new Attachment("docs/specifications.pdf");
const attachment2 = new Attachment("images/wireframe.png");

// Upload attachments
attachment1.upload();
attachment2.upload();

// Add to task1
task1.addAttachment(attachment1);
task2.addAttachment(attachment1);
task2.addAttachment(attachment2);
task4.addAttachment(attachment2);

// List attachments of each tasks
console.log("\n📁 All Task Attachments:");

Task.getAllTasks().forEach((task) => {
  const attachments = task.getAttachments();
  console.log(`\n📌 Task: ${task.getTitle()}`);
  if (attachments.length > 0) {
    attachments.forEach((attachment, index) => {
      console.log(`   ${index + 1}. ${attachment.getFilePath()}`);
    });
  } else {
    console.log("   ❌ No attachments for this task.");
  }
});

// ---------------------------Logout---------------------------------
chhorrina.logout();
console.log(`🚪 ${chhorrina.getName()} has logged out.`);

// Generate Repor-----------
const productivityReport = new Report(oopProject);
productivityReport.generate();
// Display Report Text
