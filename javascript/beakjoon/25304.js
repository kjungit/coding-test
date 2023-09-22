const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const res = Number(input[0]);
const length = Number(input[1]);
let value = 0;
for (let i = 2; i <= length + 1; i++) {
  let [a, b] = input[i].split(" ");
  let v = Number(a) * Number(b);
  value += v;
}

if (res === value) {
  console.log("Yes");
} else {
  console.log("No");
}
