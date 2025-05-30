import { Project } from "./Project";
import { Task } from "./Task";

export class User {
    private name: string;
    private phone: string;
    private email: string;
    private password: string;
    private address: string;
    private projects: Project[] = [];
    private teamName: string = "Default Team";
    private teamMembers: User[] = [];


    constructor(name: string, phone: string, email: string, password: string, address: string, teamName: string = "Default Team") {
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.password = password;
        this.address = address;
        this.teamName = teamName;
    }

    public getName(): string {
        return this.name;
    }

    public getPhone(): string {
        return this.phone;
    }

    public getEmail(): string {
        return this.email;
    }

    public getPassword(): string {
        return this.password;
    }

    public getAddress(): string {
        return this.address;
    }

    public getProjects(): Project[] {
        return this.projects;
    }

    public getTeamName(): string {
        return this.teamName;
    }

    public getTeamMembers(): User[] {
        return this.teamMembers;
    }

    // User login method
    public login(name: string, email: string, password: string): boolean {
        return this.name=== name && this.email === email && this.password === password;
    }

    //User logout method
    public logout(): void {
        console.log(`${this.name} has logged out.`);
    }

    // Add a new project and store it
    public addProject(id: number, name: string, description: string): Project {
        const project = new Project(id, name, description, this);
        this.projects.push(project);
        console.log(`${this.name} has added a new project: ${name}`);
        return project;
    }

    // Add task to a specific project
    public addTaskToProject(projectId: number, task: Task): void {
        const project = this.projects.find(p => p.getId() === projectId);
        if (project) {
            project.addTask(task);
            console.log(`Task "${task.getTitle()}" added to project "${project.getName()}"`);
        } else {
            console.log("Project not found!");
        }
    }

    // Add team name
    public addTeamName(name: string): void {
        this.teamName = name;
    }

    // Add a team member
    public addTeamMember(member: User): void {
        this.teamMembers.push(member);
        console.log(`${this.name} has added a new team member: ${member.getName()}`);
    }
}