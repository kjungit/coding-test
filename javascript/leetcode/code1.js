// leetcode 자바스크립트 문제 풀이 Valid Parentheses 유효한 괄호
/**
 * 문제설명
'(', ')', '{', '}', '[' 및 ']' 문자만 포함하는 문자열이 주어지면 입력 문자열이 유효한지 확인합니다.
다음과 같은 경우 입력 문자열이 유효합니다.
열린 브래킷은 동일한 유형의 브래킷으로 닫아야 합니다.
열린 브래킷은 올바른 순서로 닫아야 합니다.
모든 닫기 대괄호에는 동일한 유형의 해당 여는 대괄호가 있습니다.
- 이번 문제는 stack을 활용하는 문제이다.
- 간단하게 말하면 입력값을 넣어놓고 입력값에 맞는 값들을 빼면서 length를 0으로 만들어내면 된다.
 */
var isValid = function (s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "{" || s[i] === "[" || s[i] === "(") {
      stack.push(s[i]);
    } else {
      const lastChar = stack.pop();
      if (
        (s[i] === "}" && lastChar !== "{") ||
        (s[i] === "]" && lastChar !== "[") ||
        (s[i] === ")" && lastChar !== "(")
      ) {
        return false;
      }
    }
  }
  return stack.length === 0;
};
