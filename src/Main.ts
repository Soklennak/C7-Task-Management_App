import { User } from "./User";


// User Class
let chhorrina = new User("Chhorrina", "1234567890", "rian@.com", "password123", "273, Sorla");
console.log(`User Name: ${chhorrina.getName()} has logged in.`);
console.log(`User Name: ${chhorrina.logout()} has logged out.`);
console.log(`User Name: ${chhorrina.getName()} has added a new project.`);
chhorrina.addProject("New Project");