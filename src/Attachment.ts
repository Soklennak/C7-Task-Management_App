import { Task } from "./Task";

export class Attachment{
    private filePath: string;

    constructor(filePath: string){
        this.filePath  = filePath;
    }
    public upload(): void{

    }
    public download(): void{

    }
    public getFilePath(): string{
        return this.filePath;
    }
}