// LeetCode 6. Zigzag Conversion 자바스크립트 문제 풀이
/**
 * 문제 설명

문자열 "PAYPALISHIRING"은 다음과 같이 주어진 행 수에 지그재그 패턴으로 작성됩니다.

(가독성을 위해 이 패턴을 고정 글꼴로 표시할 수 있습니다.)

P   A   H   N
A P L S I I G
Y   I   R
 그런 다음 "PAHNAPLSIIGYIR"을 한 줄씩 읽습니다.

문자열을 취하고 주어진 행의 수를 이 변환하는 코드를 작성하십시오:

Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"
- 문제를 처음보고 2차원 배열로 접근을 해야하나 라는 생각이 먼저 들었다.

- 그러나 2차원 배열을 사용할 필요가 없었다.

- 문제를 간단하게 설명하면 주어지는 numRows만큼 배열에 요소를 만들고 그 요소에 s문자열을 순서대로 넣어주면 되는 문제였다.

하...문제 이해력이 너무 딸리는거 같다.. 나도 똑똑해 지고싶어..
 */
var convert = function (s, numRows) {
  const sLen = s.length; // s.length를 변수에 담는다.
  if (numRows < 2 || sLen < numRows) {
    // numRows가 0이거나 문자열보다 큰 수이면 원본 s를 리턴
    return s;
  }

  const rows = new Array(numRows).fill(""); // 새로운 배열에 fill로 numRows만큼 요소를 추가
  let count = 0;
  let reverse = false; // count의 수를 ++ --로 바꾸기 위해서 false로 우선 할당

  for (i = 0; i < sLen; i++) {
    rows[count] += s[i]; // 새로운 배열에 count만큼 s문자열을 하나씩 추가
    reverse ? count-- : count++; // reverse가 true면 --, false면 ++
    if (count === 0 || count === numRows - 1) {
      // count가 0이거나 numRows-1과 같으면?
      reverse = !reverse; // false면 true로! true면 false로!
    }
  }
  return rows.join(""); // for문을 다 돌고 배열을 문자열로 반환
};
