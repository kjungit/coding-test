const str = `3 3
1 1 1
2 2 2
0 1 0
3 3 3
4 4 4
5 5 100`;

const input = str.split("\n").map((i) => i.split(" ").map((i) => Number(i)));

const [n, m] = input.shift();
const arr = Array(n)
  .fill()
  .map(() => Array(m).fill(0));

const result = arr.map((row, i) =>
  row.map((value, j) => value + input[i][j] + input[i + n][j])
);

result.forEach((i) => console.log(i.join(" ")));
