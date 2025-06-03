import { Task } from "./Task";

export class Attachment{
    private filePath: string;

    constructor(filePath: string){
        this.filePath  = filePath;
    }

    public upload(): void{
        console.log(`Uploading file from path: ${this.filePath}`);

    }

    public download(): void{
        console.log(`Downloading file from path: ${this.filePath}`);
    }

    public getFilePath(): string{
        return this.filePath;
    }
    
    public setFilePath(filePath: string): void{
        this.filePath = filePath;
    }
}