// 프로그래머스 직사각형 별찍기 문제풀이

process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  // 입력받은 숫자를 data에 받는다.
  const n = data.split(" "); // data를 배열로 변경한다.
  const a = Number(n[0]),
    b = Number(n[1]); // a는 별의 갯수, b는 줄의 수

  let box = ""; // 직사각형 변수

  for (let i = 0; i < b; i++) {
    //  줄의 수
    for (let j = 0; j < a; j++) {
      // 행의 수
      box += "*";
    }
    box += "\n";
  }
  console.log(box);
});

// 다른 풀이
const row = "*".repeat(a);
for (let i = 0; i < b; i++) {
  console.log(row);
}
