const input = [40, 60, 50];

const num = 3;
const arr = input.map((i) => Number(i));
const max = Math.max(...arr);
let sum = 0;

for (let i = 0; i < num; i++) {
  sum += (arr[i] / max) * 100;
}
console.log(sum / num);
