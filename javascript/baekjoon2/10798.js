const str = `AABCDD
afzz
09121
a8EWg6
P5h3kx`;

// const input = str.split("\n").map((i) => i.split(""));
// const res = [];
// while (input.length !== 0) {
//   for (let i = 0; i < input.length; i++) {
//     res.push(input[i][0]);
//     input[i].shift();
//     if (input[i].length === 0) {
//       input.splice(i, 1);
//       i = i - 1;
//     }
//   }
// }
// console.log(res.join(""));

const input = str.split("\n").map((i) => i.split(""));
let res = [];
let maxLen = Math.max(...input.map((i) => i.length));
console.log(maxLen);
for (let j = 0; j < maxLen; j++) {
  for (let i = 0; i < input.length; i++) {
    if (input[i][j] !== undefined) {
      res.push(input[i][j]);
    }
  }
}

console.log(res.join(""));
