//자바스크립트 배열 문제 풀이 - 배열 중 높은값 2개 찾기

/**
 * Q. 배열에서 높은값 2개를 찾아서 출력하기.
2개의 수를 뽑는 방법은 여러방법이 있다.
먼저 오름차순으로 변경 후 앞에 인덱스 2개만 반환시키게 되면 끝나는 문제다.
그러나 하나씩 비교해가면서 두개의 값을 출력해야하면 어떻게 해야할까?
 */

//1.배열 첫번째 두번째 값을 먼저 비교하여 정해준다.

result = nums[1] > nums[0] ? [nums[1], nums[0]] : [nums[0], nums[1]];

// - 배열의 1번과 0번째를 비교하여 정해준다.
// - 다음 for문에서 첫번째와 두번째의 크기로 비교하면서 최대값들을 찾도록 한다!

for (let i = 0; i < nums.length; i++) {
  if (nums[i] > result[0]) {
    result[1] = result[0];
    result[0] = nums[i];
  } else if (nums[i] > result[1]) {
    result[1] = nums[i];
  }
}

/**
 * - nums[i] > result[0] // 배열의 첫번째 값 보다 새로 들어오는 배열의 수가 크게 되면?
- result[1] = result[0] // 기존의 0번째 값은 출력값 1번으로 옮긴다.
- result [0] = nums[i] // 기존의 0번째 값에 새로 들어온 큰 수를 넣어준다.
- nums[i] > result[1] // 배열의 첫번째 값보다는 작지만 2번째 값보다 크다면?
- result[1] = nums[i] // 배열의 두번째 값에 저장한다.
그렇게 첫번째 큰값과 두번째 큰값을 저장하여 출력하면 배열의 가장 큰 수 2개를 찾을 수 있다.
 */

// 다른 방법

let result = [];

function sum(x, y) {
  return y - x;
}
let res = nums.sort(sum);

for (let i = 0; i < 2; i++) {
  result.push(res[i]);
}
