# 구문(Statements)

## if

`if`, `else` 키워드를 사용해 구문을 작성할 수 있습니다.

```js
if (조건) {
  // 조건이 참일 때 실행될 코드
}

if (조건) {
  // 조건이 참일 때 실행될 코드
} else {
  // 조건이 거짓일 때 실행될 코드
}

if (조건1) {
  // 조건1이 참일 때 실행될 코드
} else if (조건2) {
  // 조건2가 참일 때 실행될 코드
} else if (조건3) {
  // 조건3이 참일 때 실행될 코드
} else {
  // 모든 조건이 거짓일 때 실행될 코드
}
```

If

```js
function isPositive(number) {
  if (number > 0) {
    return "양수";
  }
}

console.log(isPositive(1)); // '양수'
console.log(isPositive(10)); // '양수'
console.log(isPositive(-2)); // undefined
```

If else

```js
function isPositive(number) {
  if (number > 0) {
    return "양수";
  } else {
    return "음수";
  }
}

console.log(isPositive(1)); // '양수'
console.log(isPositive(10)); // '양수'
console.log(isPositive(-2)); // '음수'
```

If else if

```js
function isPositive(number) {
  if (number > 0) {
    return "양수";
  } else if (number < 0) {
    return "음수";
  } else {
    return "0";
  }
}

console.log(isPositive(1)); // '양수'
console.log(isPositive(10)); // '양수'
console.log(isPositive(-2)); // '음수'
console.log(isPositive(0)); // '0'
```
