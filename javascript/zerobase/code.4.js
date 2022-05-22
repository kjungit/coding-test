// 자바스크립트 stack 괄호 짝 찾기 문제 풀이
/**
 * 문제 설명

- 같은 짝의 괄호 위치를 찾아 출력

- 입력은 계산 수식으로 주어지며, 괄호의 짝 별 위치를 [시작, 끝] 으로 찾아 2차원 배열 형태로 반환

- 위치 시작 값은 0으로 시작, 하나라도 짝이 맞지 않을 경우 빈 배열을 반환한다.

입력 값

-    "(a+b)"
-    "(a*(b+c)+d)"
-    "(a*(b+c)+d+(e)"
-    "(a*(b+c)+d)+e)"
-    "(a*(b+c)+d)+(e*(f+g))"
출력 값

#1 [ [ 0, 4 ] ]
#2 [ [ 3, 7 ], [ 0, 10 ] ]
#3 []
#4 []
#5 [ [ 3, 7 ], [ 0, 10 ], [ 15, 19 ], [ 12, 20 ] ]

- 2차원 배열에 넣어야하는게 처음에 문제가 어려웠다..

- 빈 배열을 넣고 따로 문제를 계산해서 인덱스를 넣을 생각을 했었다.
 */
if (!Array.prototype.isEmpty) {
  Array.prototype.isEmpty = function () {
    return this.length === 0;
  };
}

function answer(str) {
  let result = [];
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "(") {
      stack.push(i);
    } else if (str[i] == ")") {
      if (stack.isEmpty()) {
        return [];
      }
      result.push([stack.pop(), i]);
    }
  }
  if (!stack.isEmpty()) return [];
  return result;
}
