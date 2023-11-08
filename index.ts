#!/user/bin/env node

import inquirer from "inquirer";
 import {add} from "./add.js";
 import {sub} from "./sub.js";
 import {mul}from "./mul.js";
 import {div} from "./div.js";
  
 
 
   
const answers = await inquirer.prompt([
   
     {
        type:"number",
        name:"num1",
        message: "Enter your first number: "
     },
   
     {
        type:"number",
        name:"num2",
        message: "Enter your second number: "
     },
     {
        type:"list",
        name:"operator",
        choices: ["+", "-" ,"*"  ,"/"],
        message: "Select operator: "
     },

   ])

if (answers.operator === "+") {
    const result = add(answers.num1, answers.num2);
    console.log(result);
}
else if (answers.operator === "-") {
    const result = sub(answers.num1, answers.num2);
    console.log(result);
}
else if (answers.operator === "*") {
    const result = mul(answers.num1, answers.num2);
    console.log(result);
}

else if (answers.operator === "/") {
    const result = div(answers.num1, answers.num2);
    console.log(result);
}
