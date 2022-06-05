// Leetcode 7. Reverse Integer 자바스크립트 문제 풀이
/**
 * Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
부호 있는 32비트 정수 x가 주어지면 숫자가 반전된 x를 반환합니다.
x를 반전하면 값이 부호 있는 32비트 정수 범위 를 벗어나면 0을 반환합니다.
 */
var reverse = function (x) {
  let y = x;
  if (x < 0) x *= -1;
  let str = String(x).split("").reverse().join("");
  if (y < 0) str = str * -1;
  if (str < -2147483648 || str > 2147483647) return 0;
  return str;
};

// 다른 풀이
var reverse = function (x) {
  //문자열로 반전
  let reversed = Math.abs(x).toString().split("").reverse().join("");
  // reversed값이 uint32 범위 내에 있는지 확인하고 int32는 확인할 필요가 없다.
  // 나중에 논리에서 뺴기 기호를 고려하기 때문에 양수만 확인한다.
  if (reversed > 2 ** 31 - 1) return 0;
  // 빼기 기호가 있으면 확인하고 추가해준다.
  return Math.sign(x) * reversed;
};
