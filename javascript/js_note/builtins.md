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
