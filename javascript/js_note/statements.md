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

## switch

`switch`, `case`, `break`, `default` 키워드를 사용해 구문을 작성할 수 있습니다.  
`break` 키워드는 Switch 조건문을 종료합니다.

```js
switch (조건) {
  case 값1:
    // 조건이 '값1'일 때 실행
    break;
  case 값2:
    // 조건이 '값2'일 때 실행
    break;
  default:
  // 조건이 '값1'도 '값2'도 아닐 때 실행
}
```

```js
function price(fruit) {
  switch (fruit) {
    case "Apple":
      return 1000;
    case "Banana":
      return 1500;
    case "Cherry":
      return 2000;
    default:
      return 0;
  }
}

console.log(price("Apple")); // 1000
console.log(price("Cherry")); // 2000
console.log(price("Hello")); // 0
```

Switch 조건문은 If 조건문으로 대체할 수 있습니다.

```js
function price(fruit) {
  if (fruit === "Apple") {
    return 1000;
  } else if (fruit === "Banana") {
    return 1500;
  } else if (fruit === "Cherry") {
    return 2000;
  } else {
    return 0;
  }
}
```
