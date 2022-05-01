//자바스크립트 달팽이 배열 문제 풀이
let result = [];

// 1. result => 2차원 배열
for (let i = 0; i < length; i++) {
  result[i] = [];
}
/** 2.패턴 기반으로 반복문 구현
 *    1) length 길이만큼 시작해서 숫자를 채운다.
 *    2) length = i만큼 줄어들고, 방향도 바뀌면서, 2회씩 출력한다.
 *    3) length == 0; 프로그램을 멈춘다.
 */
let direction = 1;
let x, y, num;
x = y = num = 0;
x--;
while (true) {
  for (let i = 0; i < length; i++) {
    x += direction;
    result[y][x] = ++num;
  }

  length--;

  if (length <= 0) break;

  for (let j = 0; j < length; j++) {
    y += direction;
    result[y][x] = ++num;
  }
  direction *= -1;
}

return result;
