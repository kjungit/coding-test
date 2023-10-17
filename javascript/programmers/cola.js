let a = 2;
let b = 1;
let n = 20;
function solution(a, b, n) {
  let answer = 0;
  let totalBottles = n;

  while (totalBottles >= a) {
    let exchangedCola = Math.floor(totalBottles / a) * b;
    totalBottles = (totalBottles % a) + exchangedCola;
    answer += exchangedCola;
  }
  console.log(answer);
  return answer;
}

solution(a, b, n);
