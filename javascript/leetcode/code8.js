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
