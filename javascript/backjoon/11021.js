const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const length = +input[0];

for (let i = 1; i <= length; i++) {
  let [a, b] = input[i].split(" ");
  console.log(`Case #${i}: ${Number(a) + Number(b)}`);
}
