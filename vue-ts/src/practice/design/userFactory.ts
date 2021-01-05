class User {
    name: any;
    auth: any;
    constructor(name: any, auth: any) {
        this.name = name;
        this.auth = auth;
    }
}
class UserFactory {
    static createUserFactory(name: any) {
        if (name == 'admin') {
            return new User(name, 1);
        }
        if (name == 'user') {
            return new User(name, 2);
        }
    }
}
export default function main() {
    const user1 = UserFactory.createUserFactory("admin");
    const user2 = UserFactory.createUserFactory("user");

    console.log(user1);
    console.log(user2);
}

