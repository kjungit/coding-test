// 자바스크립트 배열 문제 풀이 - 배열 내 두 값 == 합

/**
 * ex ) [ 2, 7, 11, 15 ], 13]
2, 7, 11, 15 의 배열 중에서 2개를 더하여 13이 나오는 값의 인덱스를 반환해야하는 문제이다.
이러한 문제는 풀어본적이 있어서 그렇게 어렵지 않았다.
 */

// map을 이용해서 하는 방법

let nums = [2, 7, 11, 15];
let target = [13];

let map = {}; // key, velue

for (let i = 0; i < nums.length; i++) {
  if (map[target - nums[i]] != undefined) {
    return [map[target - nums[i]], i];
  }

  map[nums[i]] = i;
}

/**
 * - map을 이용해서 하는 방법
- map[target - num[ i ] != undfind)
1 : target(13) - nums[ 1 ]( 7 ) != undefind / 가 맞으므로 map[ nums [ 7 ]( 2 )] = i (1) 을 넣어준다. { 7 : 1 }
현재map 에는 2와 7이 있다. { 2: 0, 7 : 1 }
2 : target(13) - nums[ 2 ]( 11 ) != undefind / 가 아니다.
13에서 11을 뺀 값인 2가 map 에 있으므로 11, 2 로 target에 만족하는 두 인덱스 값인 0, 2 가 출력 된다.
 */
