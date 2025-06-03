export class Profile {
    private username: string;
    private email: string;
    private profilePicture: string;

    constructor(username: string, email: string, profilePicture: string) {
        this.username = username;
        this.email = email;
        this.profilePicture = profilePicture;
    }

    public getUsername(): string {
        return this.username;
    }

    public setUsername(username: string): void {
        this.username = username;
    }

    public getEmail(): string {
        return this.email;
    }

    public setEmail(email: string): void {
        this.email = email;
    }

    public getProfilePicture(): string {
        return this.profilePicture;
    }

    public setProfilePicture(profilePicture: string): void {
        this.profilePicture = profilePicture;
    }

    public setProfile(username: string, email: string, profilePicture: string): void {
        this.username = username;
        this.email = email;
        this.profilePicture = profilePicture;
    }

}