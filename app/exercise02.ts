import { User, users, getUserById } from "./exercise02";

let getUserName = (user: User): string => user.name

console.log(getUserName(getUserById(1)))
console.log(getUserName(getUserById(3)))
