// 코딩테스트 연습 - 같은숫자는 싫어

/**
 * 문제 설명
배열 arr가 주어집니다. 배열 arr의 각 원소는 숫자 0부터 9까지로 이루어져 있습니다. 이때, 배열 arr에서 연속적으로 나타나는 숫자는 하나만 남기고 전부 제거하려고 합니다. 단, 제거된 후 남은 수들을 반환할 때는 배열 arr의 원소들의 순서를 유지해야 합니다. 예를 들면,

arr = [1, 1, 3, 3, 0, 1, 1] 이면 [1, 3, 0, 1] 을 return 합니다.
arr = [4, 4, 4, 3, 3] 이면 [4, 3] 을 return 합니다.
배열 arr에서 연속적으로 나타나는 숫자는 제거하고 남은 수들을 return 하는 solution 함수를 완성해 주세요.

프로그래머스 코딩테스트 연습을 1일 1개 이상 해보려고한다..!

레벨 1부터 해봐야지..

처음 보고 for 문이나 filter로 해야겠다라는 생각은 했지만 for문으로 풀고나니 다른사람들의 풀이를 보니 filter한줄로 해결했다..

역시 더 생각해야해..
 */

let arr = [1, 1, 3, 3, 0, 1, 1];

function solution(arr) {
  var answer = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      answer.push(arr[i]);
    }
  }

  // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
  return answer;
}
console.log(solution(arr));

// 다른 풀이
function solution(arr) {
  return arr.filter((val, index) => val != arr[index + 1]);
}
