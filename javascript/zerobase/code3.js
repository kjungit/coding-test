// 자바스크립트 배열 stack 코드 문제 풀이
/**문제 설명

1, 2, 3을 가진 배열에서
- 1, 2, 3
- 3, 2, 1
- 3, 1, 2
이 세가지를 stack을 통해서 입력 순서대로 숫자를 없앨 수 있는지를 true, false로 반환해야한다. */

function answer(train) {
  let stack = [];
  let num = 0;

  for (let i = 0; i < train.length; i++) {
    while (stack.length === 0 || stack[stack.length - 1] < train[i]) {
      // while (stack의 길이가 0이거나 현재 stack의 가장 끝에 있는 수가 train[i]보다 작을때)
      stack.push(++num); // 1, 2, 3 을 추가
    }
    if (stack[stack.length - 1] === train[i]) {
      // if(현재 stack의 가장 끝에 있는 수가 train[i]와 같으면
      stack.pop(); // 제거
    } else {
      return false; // 그게 아니라면 fasle
    }
  }
  return true;
}

// 다른 풀이
if (!Array.prototype.peek) {
  Array.prototype.peek = function () {
    return this[this.length - 1];
  };
}

if (!Array.prototype.isEmpty) {
  Array.prototype.isEmpty = function () {
    return this.length === 0;
  };
}

function answer(train) {
  let stack = [];
  let num = 0;

  for (let i = 0; i < train.length; i++) {
    while (stack.isEmpty() || stack.peek() < train[i]) {
      stack.push(++num);
    }
    if (stack.peek() === train[i]) {
      stack.pop();
    } else {
      return false;
    }
  }
  return true;
}
