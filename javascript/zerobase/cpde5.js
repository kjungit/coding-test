// 자바스크립트 stack 알고리즘 문제 풀이 / 알파벳 순서대로 꺼내기

/**문제 설명

a, b, c, d 순으로 저장된다고 했을 때, b, a, c, d 순으로 꺼내기 위해서는

push, push, pop, pop, push, pop, push, pop 순서대로 꺼내면 된다.

꺼내야하는 알파벳 순서가 정해질때 push/pop으로 꺼내져야 하는 동작을 계산하는 프로그램을 작성해야한다.

push = 0;

pop = 0;

배열로 반환한다.

* 주어진 순서로 못 꺼낼 경우, 빈 배열로 반환한다.

 

#1 입력값 = bacd

#1 출력값 = [0, 0, 1, 1, 0, 1, 0, 1]

#2 입력값 = dabc

#2 출력값 = []

#3 입력값 = edcfgbijha

#3 출력값 = [ 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 1 ]

1. a, b, c, d 순서로 들어갈 문자열을 만든다.

2. stack에 알파벳이 없거나, stack에 있는 알파벳이 입력값 보다 작을 경우에 push를 한다.

3. push한 stack의 길이 유무 그리고 알파벳 입력값보다 클 경우에는 빈배열로 반환한다.

4. 그 외에 경우에는 pop()으로 stack에서 빼준다.

  */

function answer(str) {
  let result = [];

  let stack = [];
  let str_res = str.split("").sort().join("");
  let index = 0;
  // while문으로 stack 유무 || stack끝값 < str
  for (let i = 0; i < str.length; i++) {
    while (stack.length === 0 || stack[stack.length - 1] < str[i]) {
      stack.push(str_res[index++]);
      result.push(0);
    }
    // if stack유무 || stack끝값 > str
    if (stack.length === 0 || stack[stack.length - 1] > str[i]) {
      return [];
    } else {
      stack.pop();
      result.push(1);
    }
  }
  return result;
}
