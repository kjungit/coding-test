// LeetCode 58. Length of Last Word 문제풀이 자바스크립트
/**
 * Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal substring consisting of non-space characters only.

단어와 공백으로 구성된 문자열이 주어지면 문자열의 마지막 단어 길이를 반환합니다.

단어는 공백이 아닌 문자로만 구성된 최대 부분 문자열입니다.

// 1
Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.

// 2 
Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.
 */
var lengthOfLastWord = function (s) {
  let str = s.split(" ");
  let last_str = [];
  for (let i of str) {
    if (i.length > 0) {
      last_str.push(i);
    }
  }
  last_str = last_str.pop();
  return last_str.length;
};
