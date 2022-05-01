// 자바스크립트 배열 문제 풀이 - 높이 맞추기 / 배열 평균에 맞추기

/**
 * 배열 [ 5, 2, 4, 1, 7, 5 ]
Q, 배열에는 각 높이들이 있다.
높이가 같은 높이로 맞추고 맞춰지는 높이 값들이 얼마인지 구해야한다.
1. 높이값을 모두 더하고 배열의 길이만큼 나눠 평균을 구한다.
2. 원래 높이를 비교해가며 평균보다 낮으면 그 차를 결과값에 더해준다.
 */

let sum = 0;
for (let i = 0; i < blocks.length; i++) {
  sum += blocks[i];
}
sum /= blocks.length;

for (let block of blocks) {
  if (sum > block) {
    result += sum - block;
  }
}
