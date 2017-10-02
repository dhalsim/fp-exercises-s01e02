export interface User {
    id: number;
    name: string
}

export let users: [User] = [
    { id: 1, name: "halide" },
    { id: 2, name: "edip" }
];

export let getUserById = (id: number): User => users.find(x => x.id === id);
