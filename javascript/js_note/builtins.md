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
