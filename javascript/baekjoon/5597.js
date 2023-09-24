// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const input = [1, 2, 3, 5, 26, 17, 18, 9, 10];

const arr = input.map((i) => +i);

const ex = new Array(30).fill(0).map((i, index) => index + 1);

const res = ex.filter((x) => !arr.includes(x));

const max = Math.max.apply(null, res);
const min = Math.min.apply(null, res);

console.log(min);
console.log(max);
