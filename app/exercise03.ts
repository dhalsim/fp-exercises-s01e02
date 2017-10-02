import { User, users, getUserById } from "./exercise01";

let getUserName = (user: User): string => { 
  if(user) { 
    return user.name 
  } else { 
    return null; 
  } 
};

let getGreatingOfName = (name: string): string => "hello " + name; 

console.log(getGreatingOfName(getUserName(getUserById(1))))
console.log(getGreatingOfName(getUserName(getUserById(3))))
