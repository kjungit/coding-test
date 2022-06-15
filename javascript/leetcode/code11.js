// Leetcode 66. Plus One / Easy / 자바스크립트 문제 풀이
/**
 * 정수 배열 자릿수로 표현되는 큰 정수가 주어집니다.

여기서 각 자릿수[i]는 정수의 i번째 자릿수입니다.

숫자는 왼쪽에서 오른쪽 순서로 최상위에서 최하위 순으로 정렬됩니다.

큰 정수에는 선행 0이 포함되지 않습니다.

큰 정수를 1씩 증가시키고 결과 배열을 반환합니다.

- 간단하게 말하면 배열로 들어오는 수에 1을 더한값에 1을 더해서 배열로 반환하면 되는 문제

ex ) [ 9, 9 ] 가 들어오면 99에 1을 더해서 [ 1, 0, 0 ] 을 반환하면 된다.

 

- 처음에 접근할때는 간단하게 생각했다.

- 들어오는 배열의 길이는 최대 100이다. 그렇기 때문에 자바스크립트에서 최대정수 범위를 생각해야한다.

* 9007199254740991 ~ -9007199254740991

 

- split, sort, join을 통해서 풀려고 했지만 정수범위가 초과되게 되는 test에서는 실패하였다.
 */
let plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    digits[i]++;
    if (digits[i] > 9) {
      digits[i] = 0;
    } else {
      return digits;
    }
  }
  digits.unshift(1);
  return digits;
};

// 다른 풀이
var plusOne = function (digits) {
  return (BigInt(digits.join("")) + BigInt(1))
    .toString()
    .split("")
    .map((v) => Number(v));
};
