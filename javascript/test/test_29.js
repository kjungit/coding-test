// 자바스크립트 접두사 구하기 문제풀이
/**
 * 문자열 배열 중에서 가장 긴 공통 접두사 문자열을 찾는 함수를 작성하십시오.

공통 접두사가 없으면 빈 문자열 ""을 반환합니다.
- 문제만 보면 어려운건 없었다.
처음에는 문자를 split으로 나누어서 비교를 해야겠다고 생각했었다.
- 결국 index를 활용하는 방법으로 문제를 풀었다.
 */
let strs = ["flower", "flow", "flight"];
var longestCommonPrefix = function (strs) {
  let result = "";

  if (strs === null || strs.length === 0) {
    // input이 없거나 길이가 0이면 종료
    return result;
  }

  for (let i = 0; i < strs[0].length; i++) {
    const str = strs[0][i];
    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== str) {
        return result;
      }
    }

    result += str;
  }
  return result;
};
console.log(longestCommonPrefix(strs)); // fl
str[1][0] = f / true;
str[2][0] = f / true;
str[1][1] = l / true;
str[2][1] = l / true;
str[1][2] = o / true;
str[2][2] = i / false;
