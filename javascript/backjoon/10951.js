const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

for (let i = 0; i < input.length; i++) {
  let numbers = input[i].split(" ").map((v) => v * 1);

  console.log(numbers[0] + numbers[1]);
}
