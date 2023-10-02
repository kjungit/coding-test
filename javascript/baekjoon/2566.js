const str = `3 23 85 34 17 74 25 52 65
10 7 39 42 88 52 14 72 63
87 42 18 78 53 45 18 84 53
34 28 64 85 12 16 75 36 55
21 77 45 35 28 75 90 76 1
25 87 65 15 28 11 37 28 74
65 27 75 41 7 89 78 64 39
47 47 70 45 23 65 3 41 44
87 13 82 38 31 12 29 29 80`;

// const input = str.split("\n").map((i) =>
//   i
//     .split(" ")
//     .map((i) => Number(i))
//     .reduce(
//       (acc, curr, index) => {
//         if (curr > acc.maxValue) {
//           return { maxValue: curr, index };
//         } else {
//           return acc;
//         }
//       },
//       { maxValue: -Infinity }
//     )
// );

// const res = input.reduce(
//   (acc, curr, index) => {
//     if (curr.maxValue > acc.maxValue) {
//       return { maxValue: curr.maxValue, maxIndex: curr.index, index };
//     } else {
//       return acc;
//     }
//   },
//   { maxValue: -Infinity, index: -1 }
// );

// console.log(res.maxValue);
// console.log(Number(res.index + 1) + " " + Number(res.maxIndex + 1));
const findMax = (arr) =>
  arr.reduce(
    (acc, curr, index) =>
      curr > acc.maxValue ? { maxValue: curr, index } : acc,
    { maxValue: -Infinity }
  );

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((i) => findMax(i.split(" ").map(Number)));

const res = findMax(input.map((i) => i.maxValue));

console.log(res.maxValue);
console.log(`${res.index + 1} ${input[res.index].index + 1}`);
