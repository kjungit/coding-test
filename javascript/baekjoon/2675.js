const ex = `2
3 ABC
5 /HTP`;
const input = ex.toString().split("\n");
let value = "";
for (let i = 0; i < input.length; i++) {
  let [a, b] = input[i].split(" ");
  if (!b) continue;
  let num = a;
  let str = b;
  for (let j = 0; j < str.length; j++) {
    value += str[j].repeat(num);
  }
  value += "\n";
}

console.log(value);
