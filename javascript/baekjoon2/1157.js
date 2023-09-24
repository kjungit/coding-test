const input = "Mississipi".toUpperCase();
// const res = input.split("");
// const obj = {};

// for (let i = 0; i < res.length; i++) {
//   !obj[res[i]] ? (obj[res[i]] = 1) : obj[res[i]]++;
// }
// let maxVal = Math.max(...Object.values(obj));
// let count = Object.values(obj).filter((val) => val === maxVal).length;
// let keysWithMaxVal = Object.entries(obj)
//   .filter(([key, val]) => val === maxVal)
//   .map(([key, val]) => key);
const obj = [...input].reduce((acc, char) => {
  acc[char] = (acc[char] || 0) + 1;
  return acc;
}, {});
console.log(obj);
let maxVal = -Infinity;
let maxKeys = [];
for (let key in obj) {
  if (obj[key] > maxVal) {
    maxVal = obj[key];
    maxKeys = [key];
  } else if (obj[key] === maxVal) {
    maxKeys.push(key);
  }
}
console.log(maxVal);
console.log(maxKeys);
console.log(maxKeys.length > 1 ? "?" : maxKeys[0]);

// console.log(count > 1 ? "?" : keysWithMaxVal[0]);
