// 자바스크립트 stack 알고리즘 문제 풀이 / 알파벳 순서대로 꺼내기

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
