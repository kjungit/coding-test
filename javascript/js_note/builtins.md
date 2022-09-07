# 표준 내장 객체

## String

### .length

문자의 길이(숫자)를 반환합니다.

```js
const str = "Hello world!";
//           012345678901

console.log(str.length); // 12
```

### .includes()

대상 문자에 주어진 문자가 포함되어 있는지(불린) 확인합니다.

```js
const str = "Hello world!";

console.log(str.includes("Hello")); // true
```

찾기 시작할 위치를 두 번째 인수로 추가할 수 있습니다.  
기본값은 `0`입니다.

```js
const str = "Hello world!";
//           012345678901

console.log(str.includes("Hello", 1)); // false
```

### .indexOf()

대상 문자에서 주어진 문자와 일치하는 첫 번째 인덱스(숫자)를 반환합니다.  
일치하는 문자가 없으면 `-1`을 반환합니다.

```js
const str = "Hello world!";
//           012345678901

console.log(str.indexOf("world")); // 6
console.log(str.indexOf("HEROPY")); // -1
```

### .match()

대상 문자에서 주어진 정규식(RegExp)과 일치하는 배열을 반환합니다.

```js
const str = "Hello world!";

console.log(str.match(/^.*(?=\s)/gi)); // ['Hello']
```

### .padStart()

대상 문자의 길이(length)가 지정된 길이보다 작으면,  
주어진 문자을 지정된 길이가 될 때까지 **앞에** 붙여 새로운 문자를 반환합니다.

```js
const str = "1234567";

console.log(str.padStart(10, "0")); // '0001234567'
console.log(str); // '1234567'
```

### .padEnd()

대상 문자의 길이(length)가 지정된 길이보다 작으면,  
주어진 문자을 지정된 길이가 될 때까지 **끝에** 붙여 새로운 문자를 반환합니다.

```js
const str = "1234567";

console.log(str.padEnd(10, "0")); // '1234500000'
console.log(str); // '1234567'
```

### .replace()

대상 문자에서 패턴(문자, 정규식)과 일치하는 부분을 교체한 새로운 문자를 반환합니다.

```js
const str = "Hello, Hello?!";

console.log(str.replace("Hello", "Hi")); // 'Hi, Hello?!'
console.log(str.replace(/Hello/g, "Hi")); // 'Hi, Hi?!'
console.log(str); // 'Hello, Hello?!'
```

### .search()

대상 문자에서 정규식과 일치하는 첫 번째 인덱스(숫자)를 반환합니다.

```js
const str = "Hello world!";
//           012345678901

console.log(str.search(/\s/)); // 5
```

### .slice()

대상 문자의 일부를 추출해 새로운 문자를 반환합니다.  
두 번째 인수 직전까지 추출하고, 두 번째 인수를 생략하면 대상 문자의 끝까지 추출합니다.

```js
const str = "Hello world!";
//           012345678901
//          -210987654321

console.log(str.slice(0, 5)); // 'Hello'
console.log(str.slice(6, -1)); // 'world'
console.log(str.slice(6)); // 'world!'
console.log(str); // 'Hello world!'
```

### .split()

대상 문자를 주어진 구분자로 나눠 배열로 반환합니다.

```js
const str = "Apple, Banana, Cherry";

console.log(str.split(", ")); // ['Apple', 'Banana', 'Cherry']
```

```js
const str = "Apple";

console.log(str.split("").reverse().join("")); // elppA
```

### .startsWith()

대상 문자가 주어진 문자로 시작하는지 여부를 반환합니다.  
탐색할 시작 위치를 지정할 수 있습니다.

```js
const str = "Hello world!";
//           012345678901

console.log(str.startsWith("Hello")); // true
console.log(str.startsWith("world")); // false
console.log(str.startsWith("world", 6)); // true
```

### .toLowerCase()

대상 문자를 영어 소문자로 변환해 새로운 문자로 반환합니다.

```js
const str = "Apple, Banana, Cherry";

console.log(str.toLowerCase()); // 'apple, banana, cherry'
console.log(str); // 'Apple, Banana, Cherry'
```

### .toUpperCase()

대상 문자를 영어 대문자로 변환해 새로운 문자로 반환합니다.

```js
const str = "Apple, Banana, Cherry";

console.log(str.toUpperCase()); // 'APPLE, BANANA, CHERRY'
console.log(str); // 'Apple, Banana, Cherry'
```

### .trim()

대상 문자의 앞뒤 공백 문자(space, tab 등)를 제거한 새로운 문자를 반환합니다.

```js
const str = "   Hello world!  ";

console.log(str.trim()); // 'Hello world!!'
console.log(str); // '   Hello world!  '
```

---

## Number

### .toFixed()

숫자를 지정된 고정 소수점 표기(자릿수)까지 표현하는 문자로 반환합니다.

```js
const num = 3.1415926535;

console.log(num.toFixed(2)); // '3.14'
console.log(parseFloat(num.toFixed(2))); // 3.14
```

### .toLocaleString()

숫자를 현지 언어 형식의 문자로 반환합니다.

```js
const num = 1000000;

console.log(num.toLocaleString()); // '1,000,000'
console.log(`${num.toLocaleString()}원`); // '1,000,000원'
```

### Number.isInteger()

숫자가 정수(integer)인지 확인합니다.

```js
const num = 123;
const pi = 3.14;

console.log(Number.isInteger(num)); // true
console.log(Number.isInteger(pi)); // false
```

### Number.isNaN() 또는 isNaN()

주어진 값이 `NaN`인지 확인합니다.  
`isNaN()`보다 더 엄격한 버전으로 ES6에 추가된 `Number.isNaN()` 사용을 권장합니다.

```js
const num1 = NaN;
const num2 = 123;
const str = "Hello world";
const nul = null;

console.log(Number.isNaN(num1)); // true
console.log(Number.isNaN(num2)); // false
console.log(Number.isNaN(str)); // false
console.log(Number.isNaN(nul)); // false
```

### Number.parseInt() 또는 parseInt()

주어진 값(숫자, 문자)을 파싱해 특정 진수(radix)의 정수로 반환합니다.  
`Number.parseInt()`는 ES6에서 전역 객체의 모듈화를 위해 추가됐습니다.  
10진수가 기본값이 아니기 때문에 꼭 명시하는 것이 좋습니다!

```js
const str = "3.1415926535";

// 10진수 정수로 반환!
console.log(Number.parseInt(str, 10)); // 3
console.log(Number.parseInt(num, 10)); // 3
```

다음과 같은 경우 `NaN`를 반환합니다.

- 진수 값이 `2`보다 작거나 `36`보다 큰 경우
- 공백이 아닌 첫 문자를 숫자로 변환할 수 없는 경우

### Number.parseFloat() 또는 parseFloat()

주어진 값(숫자, 문자)을 파싱해 부동소수점 실수로 반환(숫자)합니다.  
`Number.parseFloat()`는 ES6에서 전역 객체의 모듈화를 위해 추가됐습니다.

```js
const str = "3.1415926535";
const num = 3.1415926535;

console.log(Number.parseFloat(str)); // 3.1415926535
console.log(Number.parseFloat(num)); // 3.1415926535
```

---

## Math

### Math.abs()

주어진 숫자의 절댓값을 반환합니다.

```js
console.log(Math.abs(2)); // 2
console.log(Math.abs(-2)); // 2
```

### Math.ceil()

주어진 숫자를 올림해 정수를 반환합니다.

```js
console.log(Math.ceil(3.1415926535)); // 4
```

### Math.floor()

주어진 숫자를 내림해 정수를 반환합니다.

```js
console.log(Math.floor(3.1415926535)); // 3
```

### Math.round()

주어진 숫자를 반올림해 정수를 반환합니다.

```js
const num1 = 3.141;
const num2 = 3.768;

console.log(Math.round(num1)); // 3
console.log(Math.round(num2)); // 4
```

### Math.max()

주어진 숫자 중 가장 큰 숫자를 반환합니다.

```js
console.log(Math.max(1, 22, 38, 192)); // 192
```

### Math.min()

주어진 숫자 중 가장 작은 숫자를 반환합니다.

```js
console.log(Math.min(1, 22, 38, 192)); // 1
```

### Math.pow()

주어진 숫자의 거듭제곱한 값을 반환합니다.

```js
console.log(Math.pow(4, 2)); // 16
console.log(Math.pow(7, 2)); // 49
console.log(Math.pow(10, 3)); // 1000
```

### Math.random()

`0` 이상 `1` 미만의 난수를 반환합니다.

```js
console.log(Math.random()); // 0.6903810349799351

// 특정 범위의 무작위 정수를 얻는 함수
// 0~9 사이 정수
function random(min = 0, max = 10) {
  return Math.floor(Math.random() * (max - min)) + min;
}

console.log(random()); // 0~9
console.log(random(11, 20)); // 11~19
console.log(random(101, 1000)); // 101~999

//// 원리! ////
// const ran = Math.random()
// const max = 5
// const min = 1
//
// console.log(ran) // 무작위 수 생성!
// console.log(ran * (max - min)) // 범위의 최댓값 만들기!
// console.log(Math.floor(ran * (max - min))) // 소수점 내림!
// console.log(Math.floor(ran * (max - min)) + min) // 범위의 최솟값 만들기!
```

---

## Date

### 개요

`new Date()`를 통해 반환되는 인스턴스를 '타임스탬프'(Timestamp)라고 합니다.

```js
const date = new Date();
console.log(date);
// 타임스탬프 - 'Wed Sep 28 2022 10:45:41 GMT+0900 (한국 표준시)'

console.log(typeof date); // 'object'
console.log(typeof "Wed Sep 28 2022 10:45:41 GMT+0900 (한국 표준시)"); // 'string'
```

```js
const d1 = new Date(2022, 11, 16, 12, 57, 30);
console.log(d1); // 'Fri Dec 16 2022 12:57:30 GMT+0900 (한국 표준시)'

const d2 = new Date("Fri Dec 16 2022 12:57:30 GMT+0900 (한국 표준시)");
console.log(d2); // 'Fri Dec 16 2022 12:57:30 GMT+0900 (한국 표준시)'
```

### .getFullYear()와 .setFullYear()

날짜 인스턴스의 '연도'를 반환하거나 지정합니다.

```js
const date = new Date();

console.log(date.getFullYear()); // 2022

date.setFullYear(2023);
console.log(date.getFullYear()); // 2023
console.log(date); // 'Thu Sep 28 2023 14:23:23 GMT+0900 (한국 표준시)'
```

### .getMonth()와 .setMonth()

날짜 인스턴스의 '월'을 반환하거나 지정합니다.  
0부터 시작(Zero-based numbering)합니다.

```js
const date = new Date();

console.log(date.getMonth()); // 8
console.log(date); // 'Wed Sep 28 2022 15:26:49 GMT+0900 (한국 표준시)'

date.setMonth(0);
console.log(date.getMonth()); // 0
console.log(date); // 'Fri Jan 28 2022 14:26:33 GMT+0900 (한국 표준시)'
```

### .getDate()와 .setDate()

날짜 인스턴스의 '일'을 반환하거나 지정합니다.

```js
const date = new Date();

console.log(date.getDate()); // 28
console.log(date); // 'Wed Sep 28 2022 15:35:14 GMT+0900 (한국 표준시)'

date.setDate(11);
console.log(date.getDate()); // 11
console.log(date); // 'Mon Sep 11 2022 12:03:40 GMT+0900 (한국 표준시)'
```

### .getHours()와 .setHours()

날짜 인스턴스의 '시간'을 반환하거나 지정합니다.

```js
const date = new Date();

console.log(date.getHours()); // 14
console.log(date); // 'Wed Dec 21 2022 14:23:51 GMT+0900 (한국 표준시)'

date.setHours(7);
console.log(date.getHours()); // 7
console.log(date); // 'Wed Dec 21 2022 07:23:51 GMT+0900 (한국 표준시)'
```

### .getMinutes()와 .setMinutes()

날짜 인스턴스의 '분'을 반환하거나 지정합니다.

```js
const date = new Date();

console.log(date.getMinutes()); // 47
console.log(date); // 'Wed Sep 28 2022 15:47:33 GMT+0900 (한국 표준시)'

date.setMinutes(2);
console.log(date.getMinutes()); // 2
console.log(date); // 'Wed Sep 28 2022 15:02:33 GMT+0900 (한국 표준시)'
```

### .getSeconds()와 .setSeconds()

날짜 인스턴스의 '초'를 반환하거나 지정합니다.

```js
const date = new Date();

console.log(date.getSeconds()); // 13
console.log(date); // 'Wed Sep 28 2022 15:50:13 GMT+0900 (한국 표준시)'

date.setSeconds(57);
console.log(date.getSeconds()); // 57
console.log(date); // 'Wed Sep 28 2022 15:50:57 GMT+0900 (한국 표준시)'
```
