// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const input = [1, 2, 3, 5, 6, 7, 8, 9, 10];

const arr = input.map((i) => +i);

const sort = arr.sort((a, b) => a - b);

const ex = new Array(30).fill(0).map((i, index) => index + 1);

const res = ex.filter((x) => !arr.includes(x));

const max = Math.max.apply(null, res);
const min = Math.min.apply(null, res);

console.log(min);
console.log(max);
