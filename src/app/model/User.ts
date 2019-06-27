export class User {
    constructor(
        public login: string,
        public type: string,
        public company: string,
        public bio: string,
        public location: string,
        public avatar_url: string,
        public repos_url: string,
        public followers: number
        ) {}
}