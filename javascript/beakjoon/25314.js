const score = 4;
const length = score / 4;
let str = "";
for (let i = 0; i < length; i++) {
  if (i === 0) str = "long";

  if (i > 0) {
    str += " long";
  }

  if (i === length - 1) {
    str += " int";
  }
}

console.log(str);
