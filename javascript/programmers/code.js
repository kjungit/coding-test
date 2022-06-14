// 프로그래머스 숫자의 표현 자바스크립트 문제 풀이
/**
 * 문제 설명

Finn은 요즘 수학공부에 빠져 있습니다.

수학 공부를 하던 Finn은 자연수 n을 연속한 자연수들로 표현 하는 방법이 여러개라는 사실을 알게 되었습니다.

예를들어 15는 다음과 같이 4가지로 표현 할 수 있습니다.

1 + 2 + 3 + 4 + 5 = 15
4 + 5 + 6 = 15
7 + 8 = 15
15 = 15
자연수 n이 매개변수로 주어질 때, 연속된 자연수들로 n을 표현하는 방법의 수를 return하는 solution를 완성해주세요.

이번 문제를 풀면서 알고리즘은 역시 수학의 중요성이 돋보이는 문제였다.

처음 문제를 보고 코드를 작성을 하면서 숫자를 1부터 시작해서 n의 숫자만큼 순서대로 더해가며 계산을 하려고 했다.

코드는 완성했고 테스트는 모두 통과했지만.. 효율성에서 모두 실패하였다.. 왜그럴까?

 

이 문제에서 원하는 답은 수학적인 방법으로 코드를 완성해야했다.
 */

// 효울설 실패한 풀이
function solution(n) {
  let result = 0;
  let answer = 0;
  let arr = Array.from({ length: n }, (e, i) => i + 1);

  while (arr.length > 0) {
    for (let i = 0; i < arr.length; i++) {
      answer += arr[i];
      if (answer === n) {
        result += 1;
        break;
      }
    }
    answer = 0;
    arr.shift();
  }
  return result;
}

// 풀이
function solution(n) {
  let result = 0;
  let count = 0;
  while (n > 0) {
    count++;
    n = n - count;
    if (n % count == 0) result++;
  }
  return result;
}
