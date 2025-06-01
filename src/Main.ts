import { Task } from "./Task";
import { User } from "./User";
import { Reminder } from "./Reminder";
import { Project } from "./Project";
import { Label } from "./Labels";
import { Priority } from "./EnumPriority";
import { Status } from "./EnumStatus";
import { Dashboard } from "./Dashboard";

// Create a new user
let chhorrina = new User("Chhorrina", "1234567890", "rian@.com", "password123", "273, Sorla");
let soklen = new User("Soklen", "0987654321", "soklen@.com", "password456", "123, Sorla");
let bunyoung = new User("Bunyoung", "1122334455", "bunyoung@.com", "password789", "456, Sorla");

// Login simulation
console.log(`✅ ${chhorrina.getName()} has logged in.`);

// Create a new project
let oopProject = chhorrina.addProject(1, "OOP Project", "A task management app built with OOP principles.");
console.log(`📁 Project created: ${oopProject.getName()}`);

// Create tasks
let task1 = new Task(1, "Team", "Team can has many projec", new Date("2025-06-05"), Status.PENDING);
let task2 = new Task(2, "Dashboard", "Show dashbaord of user", new Date("2025-06-06"), Status.INPROGRESS);
let task3 = new Task(3, "SpecialTask", "task for volunteer event", new Date("2025-06-05"), Status.PENDING);
let task4 = new Task(4, "Urgentreport", "task for QA", new Date("2025-06-05"), Status.INPROGRESS);


// Add tasks to the project
oopProject.addTask(task1);
oopProject.addTask(task2);

console.log(`📝 Tasks have been added to the project "${oopProject.getName()}".`);

// Show all tasks from Task static storage
console.log("\n📋 All tasks in the project:");
Task.getAllTasks().forEach(task => {
    console.log(`- ${task.getTitle()} [Due: ${task.getDueDate().toDateString()}] - Status: ${task.getStatus()}`);
});

// Add team name
chhorrina.addTeamName("Task Management Team");

// Add new team member
chhorrina.addTeamMember(soklen);
console.log(`👥 Team member added: ${soklen.getName()} added to ${oopProject.getName()}`);


// Add comment
chhorrina.addCommentToTask(task1, "This is a critical task. Please prioritize it.");
soklen.addCommentToTask(task2, "I will work on this task next week.");
bunyoung.addCommentToTask(task1, "I have completed my part of the task.");

Task.getAllTasks().forEach(task => {
    const comments = task.getComments();
    if (comments.length > 0) {
        console.log(`\n📌 Task: ${task.getTitle()}`);
        comments.forEach(comment => {
            console.log(`- ${comment.getUser().getName()}: ${comment.getContent()}`);
        });
    } else {
        console.log(`\n📌 Task: ${task.getTitle()} — No comments yet.`);
    }
});


// Reminder for a task
let reminder = new Reminder(task1, new Date("2025-06-04")); 
console.log(`⏰ Reminder set for task "${task1.getTitle()}" on ${reminder.getNotifyDate().toDateString()}.`);

// Get upcoming tasks       
let upcomingTasks = reminder.getUpcomingTasks();
if (upcomingTasks.length > 0) {
    console.log("🔔 Upcoming tasks:");
    upcomingTasks.forEach(task => {
        console.log(`- ${task.getTitle()} [Due: ${task.getDueDate().toDateString()}]`);
    });
}

// Cancel the reminder
reminder.cancelReminder();      

// Show all tasks after reminder cancellation
console.log("\n📋 All tasks in the project after reminder cancellation:");
Task.getAllTasks().forEach(task => {
    console.log(`- ${task.getTitle()} [Due: ${task.getDueDate().toDateString()}] - Status: ${task.getStatus()}`);
});

// Logout simulation
chhorrina.logout();

//labels 
// Create labels
const labelUrgent = new Label("URGENT");
const labelHome = new Label("HOME");
const labelWork = new Label("WORK");

// Assign labels to tasks
labelUrgent.addTask(task1);
labelUrgent.addTask(task4);
labelHome.addTask(task2);
labelWork.addTask(task3);

// 🏷️ Show labels with tasks
console.log("\n🏷️ All labels and their tasks:");
const allLabels = [labelUrgent, labelHome, labelWork];
allLabels.forEach(label => {
  console.log(`- ${label.getName()}:`);
  label.getTasks().forEach(task => {
    console.log(`   • ${task.getTitle()}`);
  });
});


// 📊 DASHBOARD SUMMARY

console.log("\n📊 DASHBOARD SUMMARY");

// USERS
console.log("\n👤 USERS:");
Dashboard.getAllUsers().forEach(user => {
    console.log(`- ${user.getName()}`);
});

// PROJECTS
console.log("\n📁 PROJECT:");
console.log(`- ${oopProject.getName()} (${oopProject.getTasks().length} tasks)`);

// TASKS
console.log("\n📝 TASKS:");
Task.getAllTasks().forEach(task => {
    console.log(`- ${task.getTitle()} [Due: ${task.getDueDate().toDateString()}] - Status: ${task.getStatus()}`);
});

// COMMENTS PER TASK
console.log("\n💬 TASK COMMENTS:");
Task.getAllTasks().forEach(task => {
    const comments = task.getComments();
    if (comments.length > 0) {
        console.log(`📌 ${task.getTitle()}:`);
        comments.forEach(comment => {
            console.log(`   - ${comment.getUser().getName()}: ${comment.getContent()}`);
        });
    }
});

// LABELS
console.log("\n🏷️ LABELS & TASKS:");
Dashboard.getAllLabels().forEach(label => {
    console.log(`- ${label.getName()}:`);
    label.getTasks().forEach(task => {
        console.log(`   • ${task.getTitle()}`);
    });
});

// LOGOUT
console.log(`\n🚪 ${chhorrina.getName()} has logged out.`);