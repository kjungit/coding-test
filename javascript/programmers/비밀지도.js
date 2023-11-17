const n = 5;
const arr1 = [9, 20, 28, 18, 11];
const arr2 = [30, 1, 21, 17, 28];

function solution(n, arr1, arr2) {
  var answer = arr1.map((i) => i.toString(2).padStart(n, 0).split(""));
  var answer2 = arr2.map((i) => i.toString(2).padStart(n, 0).split(""));
  for (let i = 0; i < answer.length; i++) {
    for (let j = 0; j < answer.length; j++) {
      if (answer[i][j] === "1" || answer2[i][j] === "1") answer[i][j] = "#";
      else answer[i][j] = " ";
    }
  }
  let res = answer.map((i) => i.join(""));
  return res;
}

solution(n, arr1, arr2);
