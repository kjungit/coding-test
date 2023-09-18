const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const length = Number(input[0]);

result = "";

for (let i = 0; i < length; i++) {
  for (let j = 0; j <= i; j++) {
    result += "*";
  }
  result += "\n";
}

console.log(result);
