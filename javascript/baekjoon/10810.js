// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

// const [n, m] = input[0].split(" ").map((el) => Number(el));

const input = [
  [5, 4],
  [1, 2, 3],
  [3, 4, 4],
  [1, 4, 1],
  [2, 2, 2],
];

const n = 5;
const m = 4;

const arr = new Array(n).fill(0);

for (let i = 1; i <= m; i++) {
  let [start, end, num] = input[i];
  for (start; start <= end; start++) {
    arr[start - 1] = num;
  }
}

console.log(arr.join(" "));
