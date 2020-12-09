let BusinessLogic = require('./BusinessLogic');
let readline = require('readline-sync');
let paranthesis = new BusinessLogic();
let str = readline.question("Enter your input : \n");
console.log(paranthesis.isMatchingBrackets(str));