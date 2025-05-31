import { User } from "./User";
import { Team } from "./Team";


// User Class
let chhorrina = new User("Chhorrina", "1234567890", "rian@.com", "password123", "273, Sorla");
console.log(`User Name: ${chhorrina.getName()} has logged in.`);
console.log(`User Name: ${chhorrina.logout()} has logged out.`);
console.log(`User Name: ${chhorrina.getName()} has added a new project.`);
chhorrina.addProject("New Project");

//Team Class
let team = new Team("Development", 1);
team.addMember(chhorrina);
console.log(`Team Name: ${team.getTeamName()}`);
console.log(`Project ID: ${team.getProjectId()}`);
console.log(`Team Members: ${team.getMembers().map(member => member.getName()).join(", ")}`);