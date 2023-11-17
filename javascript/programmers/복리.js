function solution(p, m, d) {
  function calculator(percent) {
    let money = p;
    for (let i = 0; i < m; i++) {
      money += Math.floor((money * percent) / 100);
    }
    return money;
  }

  let low = 0;
  high = 100;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (calculator(mid) >= d) high = mid - 1;
    else low = mid + 1;
  }

  return low;
}

let p = 10000000;
let m = 9;
let d = 13000000;
