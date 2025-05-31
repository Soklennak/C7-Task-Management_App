import { Task } from "./Task";
import { User } from "./User";
import { Reminder } from "./Reminder";
import { Project } from "./Project";

// Create a new user
let chhorrina = new User("Chhorrina", "1234567890", "rian@.com", "password123", "273, Sorla");
let soklen = new User("Soklen", "0987654321", "soklen@.com", "password456", "123, Sorla");

// Login simulation
console.log(`✅ ${chhorrina.getName()} has logged in.`);

// Create a new project
let oopProject = chhorrina.addProject(1, "OOP Project", "A task management app built with OOP principles.");
console.log(`📁 Project created: ${oopProject.getName()}`);

// Create tasks
let task1 = new Task(1, "Team", "Team can has many projec", new Date("2025-06-05"), "pending");
let task2 = new Task(2, "Dashboard", "Show dashbaord of user", new Date("2025-06-06"), "pending");

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


// Logout simulation
chhorrina.logout();


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

