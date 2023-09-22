const length = 10;
const arr = [1, 10, 4, 9, 2, 3, 8, 5, 7, 6];
const find = 5;

const res = arr.filter((item) => item < find);
console.log(res.join(" "));
