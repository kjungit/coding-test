// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n")

const input = [
  [5, 4],
  [1, 2],
  [3, 4],
  [1, 4],
  [2, 2],
];

const n = 5;
const m = 4;

const arr = new Array(n).fill(0).map((item, index) => (item = index + 1));

for (let i = 1; i <= m; i++) {
  let [start, end] = input[i];
  let f = arr[start - 1];
  let b = arr[end - 1];
  arr[start - 1] = b;
  arr[end - 1] = f;
}

console.log(arr.join(" "));
