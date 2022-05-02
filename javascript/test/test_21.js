// 올바른 괄호
/**
 * 문제 설명
괄호가 바르게 짝지어졌다는 것은 '(' 문자로 열렸으면 반드시 짝지어서 ')' 문자로 닫혀야 한다는 뜻입니다. 예를 들어

"()()" 또는 "(())()" 는 올바른 괄호입니다.
")()(" 또는 "(()(" 는 올바르지 않은 괄호입니다.
'(' 또는 ')' 로만 이루어진 문자열 s가 주어졌을 때, 문자열 s가 올바른 괄호이면 true를 return 하고, 올바르지 않은 괄호이면 false를 return 하는 solution 함수를 완성해 주세요.

제한사항
문자열 s의 길이 : 100,000 이하의 자연수
문자열 s는 '(' 또는 ')' 로만 이루어져 있습니다.
 

처음 문제를 보고 이해를 잘못했었다. 처음 괄호가 열리고 마지막에는 닫히기만 하면 되는줄 알고 stratsWith, endsWith를 했다가 실패를 하는걸보고 그게 아니였다.

 

(괄호가 열리면 )닫히면 true가 되어야하는 문제였다. ()()  이거는 true, (())이것도 true!

그러나 )괄호가 먼저 닫히게 시작하거 제대로 괄호다 ()닫혀있지 않으면 false를 반환해야한다.

"("  +1

")"  -1

이렇게 점수를 주고 카운트를 주면서 값이 0이 되는 문자열은 true를 반환시켜주었다.
 */

function solution(s) {
  var answer = true;

  let count = 0;
  for (let i = 0; i < s.length; i++) {
    s[i] === "(" ? count++ : count--;
    if (count < 0) return false;
  }

  return count === 0 ? true : false;
}
console.log(solution(s));

// 합격한 코드
let count = 0;
for (let i = 0; i < s.length; i++) {
  count += s[i] === "(" ? 1 : -1;
  if (count < 0) return false;
}

return count === 0 ? true : false;
