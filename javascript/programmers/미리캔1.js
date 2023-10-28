function solution(n, price) {
  let stones = 0;
  let money = 0;

  for (let i = 0; i < n; i++) {
    if (price[i] === 0) {
      // 만약 돌의 시세가 0인 경우, 돌을 팔아서 얻은 돈으로 최대한 돌을 사고 팝니다.
      money += stones * price[i];
      stones = 0;
    } else if (money >= price[i]) {
      // 돈이 충분하고 돌의 시세가 0이 아닌 경우, 돌을 사고 돈을 차감합니다.
      money -= price[i];
      stones++;
    } else if (stones > 0) {
      // 돈이 부족하고 돌을 가지고 있는 경우, 돌을 팔아 돈을 얻습니다.
      money += stones * price[i];
      stones = 0;
    }
  }

  return money;
}

console.log(solution(3, [0, 1, 2])); // 2
console.log(solution(3, [1, 0, 0])); // 0
console.log(solution(5, [0, 2, 1, 1, 2])); // 4
