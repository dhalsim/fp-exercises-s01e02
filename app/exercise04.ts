import { User, users } from "./exercise01";
import { Some, None, Option, Maybe } from "./option";

let getUserById = (id: number): Option<User> => Maybe(users.find(x => x.id === id));

let getUserName = (user: User): string => user.name;

let getGreatingOfName = (name: string): string => "hello " + name; 

getUserById(1).map(getUserName).map(getGreatingOfName).map(console.log);
getUserById(3).map(getUserName).map(getGreatingOfName).map(console.log);
