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

// 해설
/**
 * - while 문으로 반복을 돌려주면서 length 값을 하나씩 줄여나간다.
( 달팽이 모양을 만들면서 숫자를 입력하면 각 행과, 열에 넣을 수 있는 수는 짝수만큼 줄어든다.)
ex) 5를 입력하면 가로 1, 2, 3, 4, 5 // 세로 6, 7, 8, 9 // 가로 10, 11, 12, 13 // 세로 14, 15, 16 // 가로 17, 18, 19 ...

- x += directrion;
[y] [x] 중에서 x값을 length(5)만큼 늘려준다. 
result [y] [x]의 x값을 ++하면서 result [0][0], [0][1], [0][2], [0][3], [0][4] 까지 1, 2, 3, 4, 5 를 넣는다.

- length--;
이제 여기서 length 값을 5에서  4로 줄여준다. 이렇게 length 값이 0이 될때까지 돌아준다고 보면된다.
 */
