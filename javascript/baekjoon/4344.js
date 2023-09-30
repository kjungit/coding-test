const str = `5
5 50 50 70 80 100
7 100 95 90 80 70 60 50
3 70 90 80
3 70 90 81
9 100 99 98 97 96 95 94 93 91`;

const input = str.split("\n");
let smart;
for (let i = 1; i <= Number(input[0]); i++) {
  let item = input[i].split(" ");
  let score = 0;
  for (let j = 1; j < item.length; j++) {
    score += Number(item[j]);
  }
  let grade = score / item[0];

  smart = item.slice(1).filter((item) => {
    return grade < Number(item);
  });
  let res = (smart.length / (item.length - 1)) * 100;
  console.log(res.toFixed(3) + "%");
}
