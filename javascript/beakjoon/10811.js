// const [a, b] = [1, 2];
// const arr = new Array(5).fill(0).map((_, index) => index + 1);
// let cutValue = arr.slice(0, 2);
// arr.splice(a - 1, b, ...cutValue.reverse());
// console.log(arr);

// cutValue = arr.slice(2, 4);
// arr.splice(a + 1, b, ...cutValue.reverse());
// console.log(arr);

const input = [
  [5, 4],
  [1, 2],
  [3, 4],
  [1, 4],
  [2, 2],
];
const [a, b] = input[0].map((i) => +i);
const arr = new Array(a).fill(0).map((_, index) => index + 1);
console.log(arr);
for (let i = 1; i <= b; i++) {
  let [c, d] = input[i].map((i) => Number(i));
  let cutValue = arr.slice(c - 1, d);
  let count = d - c + 1;
  console.log(cutValue);
  arr.splice(c - 1, count, ...cutValue.reverse());
  console.log(arr);
}

console.log(arr);

// const [a, b] = input[0].map((i) => +i);

// const arr = new Array(a).fill(0).map((_, index) => index + 1);

// for (let i = 1; i <= b; i++) {
//   const [c, d] = input[i].map((i) => +i);
//   const cutValue = arr.slice(c - 1, d);
// }

// const q = [1, 2, 3, 4, 5];
// q.splice(0, 4, ...[1, 2, 3, 4].reverse());
// console.log(q);

// const q = [2, 1, 3, 4, 5];
// q.splice(2, 2, ...[3, 4].reverse());
// console.log(q);
