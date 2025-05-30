export class User {
    private name: string;
    private phone: string;
    private email: string;
    private password: string;
    private address: string;


    constructor(name: string, phone: string, email: string, password: string, address: string) {
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.password = password;
        this.address = address;
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

    // User login method
    public login(name: string, email: string, password: string): boolean {
        return this.name=== name && this.email === email && this.password === password;
    }

    //User logout method
    public logout(): void {
        console.log(`${this.name} has logged out.`);
    }

    // User add project method
    public addProject(projectName: string): void {
        console.log(`${this.name} has added a new project: ${projectName}.`);
    }
}