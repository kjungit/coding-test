const input = [["baekjoon"]];
const str = input[0][0].split("");
const arr = new Array(26).fill(-1);
const alp = new Array(26)
  .fill()
  .map((_, i) => String.fromCharCode(i + 97))
  .join("");

str.filter((item, i) => {
  const res = alp.indexOf(item);
  arr[res] = str.indexOf(item);
});

console.log(arr);
