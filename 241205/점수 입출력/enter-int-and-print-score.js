const fs = require("fs");

let input;
input = fs.readFileSync(0).toString();
n = Number(input);
console.log(`Your score is ${n} point.`);
