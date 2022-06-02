// 자바스크립트 스택 알고리즘 문제 풀이, 괄호 계산
/**
 * 4개의 기호 (, ), [, ] 를 이용해서 만들어지는 괄호열로, 아래 규칙으로 계산하는 프로그램을 작성.

1. "()"인 괄호 열 값은  2

2. "[]"인 괄호 열 값은 3

3. "( )" 안에 들어가 있는 값은 *2

4. "[ ]" 안에 들어가 있는 값은 *3

5. 괄호가 여러개 있으면 괄호 + 괄호

 

ex) ()[[]]는 2 + 3 * 3 = 11이 나온다. ([])의 값은 2 * 3으로 6이다.

조건, 괄호의 쌍이 맞지 않거나 기호 순서가 비정상적인 경우에는 0을 반환한다.

 

입력은 4개의 기호로만 이루어진 괄호가 문자열 형태로 주어진다.

- 이 문제를 stack으로 풀려고 했을 때 계산하는게 힘들었다.

()그냥 괄호면 2이지만 ()안에 다른게 있으면 *를 해줘야한다.
 */
function answer(str) {
  let result = 0;
  let stack = [];
  let temp = 1;
  for (let i = 0; i < str.length; i++) {
    switch (str[i]) {
      case "(":
        temp *= 2;
        stack.push(str[i]);
        break;
      case "[":
        temp *= 3;
        stack.push(str[i]);
        break;
      case ")":
        if (stack.length === 0 || stack[stack.length - 1] != "(") {
          return 0;
        }
        if (str[i - 1] == "(") {
          result += temp;
        }
        stack.pop();
        temp /= 2;
        break;
      case "]":
        if (stack.length === 0 || stack[stack.length - 1] != "[") {
          return 0;
        }
        if (str[i - 1] == "[") {
          result += temp;
        }
        stack.pop();
        temp /= 3;
        break;
    }
  }

  if (stack.length !== 0) {
    return 0;
  }
  return result;
}
