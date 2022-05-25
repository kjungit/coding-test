// leetcode 3. Longest Substring Without Repeating Characters 문제 풀이
/**
 * 문자열 s가 주어지면 문자를 반복하지 않고 가장 긴 부분 문자열의 길이를 찾습니다.
ex )

1# s = "abcabcbb"
2# s = "bbbbb"
3# s = "pwwkew"
 */
var lengthOfLongestSubstring = function (s) {
  let strLth = 0;
  let current = "";

  for (let i = 0; i < s.length; i++) {
    current = current.substring(current.indexOf(s[i]) + 1);
    current += s[i];
    console.log(current);

    if (current.length > strLth) {
      strLth = current.length;
    }
  }

  return strLth;
};
