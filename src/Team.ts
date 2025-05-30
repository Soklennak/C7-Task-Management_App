import { User } from "./User";
import { Task} from "./Task";

export class Team{
    private teamName: string;
    private projectId: number;
    private members: User[] = [];

    constructor(teamName: string, projectId: number, members: User[] = []){
        this.teamName = teamName;
        this.projectId = projectId;
        this.members = members;
    }

    public createTeam(name: string): void{
        this.teamName = name;
    }

    public addMember(user: User): void{
        if (!this.members.includes(user)) {
            this.members.push(user);
        }
    }

    public removeMember(user: User): void{
        this.members = this.members.filter(member => member !== user);
    }

    public assignTaskToMember(task: Task, user: User): void{
        if (this.members.includes(user)) {
            task.assignTo(user);
        } else {
            throw new Error("User is not a member of the team.");
        }
    }

    public getTeamName(): string{
        return this.teamName;
    }

    public getProjectId(): number{
        return this.projectId;
    }
    
    public getMembers(): User[]{
        return this.members;
    }
}