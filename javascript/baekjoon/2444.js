const num = 5;
let res = "";
// for (let i = 1; i <= num; i++) {
//   for (let j = 0; j < num - i; j++) {
//     res += " ";
//   }
//   for (let j = 0; j < i * 2 - 1; j++) {
//     res += "*";
//   }
//   res += "\n";
// }

// for (let i = num - 1; i > 0; i--) {
//   for (let j = 0; j < num - i; j++) {
//     res += " ";
//   }
//   for (let j = 0; j < i * 2 - 1; j++) {
//     res += "*";
//   }
//   res += "\n";
// }

for (let i = -num + 1; i < num; i++) {
  let len = num - Math.abs(i);
  console.log(i, " ", len);
  console.log();
  let space = " ".repeat(Math.abs(i));
  let star = "*".repeat(2 * len - 1);
  res += space + star + "\n";
}

console.log(res);
