// ex ) [6,3,11,3] 배열이 주어질 때, 수열의 있는 수 중에서 최소값의 위치를 모두 출력해야한다.
// 최소값은 3이고 1, 3번 자리에 3이 있으므로,

// 1. 최소값을 구한다.

let nums = [6, 3, 11, 3];

let min = Number.MAX_SAFE_INTEGER;
for (let i = 0; i < nums.length; i++) {
  if (min > nums[i]) {
    min = nums[i];
  }
}
// - 변수 min을 만들어서 정수 최대값으로 넣어주고 for문으로 비교하면서 최소값을 min에 넣는다.

// 2. 최소값을 통해서 인덱스 위치를 출력한다.

for (let i in nums) {
  if ((min = nums[i])) {
    result.push[i];
  }
}
// - for..in 으로 min과 nums[ i ] 를 비교하면서 인덱스를 출력하면 끝!
// 단계별로 나누면서 하는게 습관이 되면 더 좋을 것 같다.
// 배열 문제를 모두 풀어본 후에 프로그래머스 문제도 풀어보도록 해야겠다.
