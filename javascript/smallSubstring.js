let t = "3141592";
let p = "271";

function solution(t, p) {
  var answer = 0;
  let length = p.length;
  let max = t.length + 1 - p.length;
  let arr = [];
  for (let i = 0; i < max; i++) {
    arr.push(t.slice(i, length + i));
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= p) answer++;
  }

  return answer;
}
console.log(solution(t, p));
