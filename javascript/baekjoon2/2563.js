const str = `3
3 7
15 7
5 2`;
const input = str.split("\n");
const arr = Array(100)
  .fill()
  .map(() => Array(100).fill(0));

let count = 0;
for (let i = 1; i <= str[0]; i++) {
  let [n, m] = input[i];
  for (let j = n; j < n + 10; j++) {
    for (let k = m; k < m + 10; k++) {
      if (arr[j][k] === 0) {
        arr[j][k]++;
        count++;
      }
    }
  }
}

console.log(count);
