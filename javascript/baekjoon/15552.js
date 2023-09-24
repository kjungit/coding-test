const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const length = Number(input[0]);
let res = "";
for (let i = 1; i < length + 1; i++) {
  let [a, b] = input[i].split(" ");
  res += Number(a) + Number(b) + "\n";
}

console.log(res);
