const fs = require("fs");

let input;
input = fs.readFileSync(0).toString();
input = Number(input);
console.log(input+2);
