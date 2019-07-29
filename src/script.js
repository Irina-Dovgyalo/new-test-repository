// const babel = require("@babel/core");

import User from "./user";
    
let user = new User('Oleg', 'Ivanov', 1990);
console.log(user.getFullName());
console.log(user.getFullAge());