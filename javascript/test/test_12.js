// 자바스크립트 배열 문제 풀이 - 배열의 정해진 합을 만족하는 요소

/**
 * Q. 배열이 9개가 있다.
배열에서 7개를 더하면 100이 된다.
9개의 배열중에서 2개를 빼고 7개로 합이 100이 되는 배열을 출력해야 한다.
처음 생각 했을 때는 경우의수를 통해서 9개의 배열중에 7개의 를 경우의수로 뽑아 전체 합이 100이 되는 수를 계산해볼까? 라는 생각을 했다.
그렇게 하기에는 너무 많은 경우의 수가 있기 때문에
9개를 모두 더한 후 100을 뺀 값에 만족하는 두 수를 찾으려고 했다.

1. 배열의 값을 모두 더한다.
2. 더한 값에 100을 뺀다.
3. 뺀 값에 만족하는 2개의 수를 찾아낸다.
4. 기존 배열과 비교하여 2개를 빼고 출력한다 */
let sum = 0;
for (let i = 0; i < dwarf.length; i++) {
  sum += dwarf[i];
}

sum -= 100;

let res = [];
for (let i = 0; i < dwarf.length; i++) {
  for (let j = i + 1; j < dwarf.length; j++) {
    if (sum == dwarf[i] + dwarf[j]) {
      res.push(dwarf[i], dwarf[j]);
    }
  }
}

for (let i = 0; i < dwarf.length; i++) {
  if (dwarf[i] != res[0] && dwarf[i] != res[1]) {
    result.push(dwarf[i]);
  }
}

// 다른 방법

for (let i = 0; i < dwarf.length; i++) {
  if (dwarf[i] != res[0] && dwarf[i] != res[1]) {
    result.push(dwarf[i]);
    res[0] = i;
    res[1] = j;
    break;
  }
  if (res.length != 0) break; // 모두 찾으면 정지
}
