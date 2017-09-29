interface User {
    id: number;
    name: string
}

let users: [User] = [
    { id: 1, name: "User 1" },
    { id: 2, name: "User 2" }
];

let getUserById = (id: number): User | undefined => users.find(x => x.id === id);

console.log(getUserById(1));
