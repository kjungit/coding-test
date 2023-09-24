const input = [39, 40, 41, 42, 43, 44, 82, 83, 84, 85];

const newArr = input.map((i) => parseInt(i % 42));
const res = new Set(newArr);
console.log([...res].length);
