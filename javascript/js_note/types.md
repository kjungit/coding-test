# 자료형

## 원시형

### 1) 문자

문자(string)은 따옴표를 사용합니다.

```js
const str1 = "Hello";
const str2 = "World";

// 템플릿 리터럴(보간 가능)
const str3 = `Good ${str2}`;
console.log(str3); // `Good World`
```

따옴표는 세 종류가 있습니다.

- 큰따옴표: `"Hello"`
- 작은따옴표: `'Hello'`
- 백틱(그레이브): <code>&grave;Hello&grave;</code>

### 2) 숫자

숫자(number)은 정수 및 부동소수점 숫자(floating point number)를 나타냅니다.

```js
const n1 = 123;
const n2 = 12.345;
```

#### 숫자가 아닌 숫자

`NaN`(Not-A-Number)는 숫자가 아닌 숫자를 나타냅니다.

```js
const str = "Hello world";
console.log(Number(str)); // NaN
```

```js
const num = 123;
console.log(num + undefined); // NaN
```

#### 부동 소수점 오류 및 해결

컴퓨터로 숫자를 표현하는 한계로 10진수로 표현되는 소수를 2진수로 표현하려면 간혹 무한소수가 발생하고,  
이를 유한하게 표현할 때 세부 값의 초과 및 손실로 계산 오류가 발생합니다.

- `숫자.toFixed(자릿수)`: 숫자를 고정 소수점 표기(자릿수)로 반환(문자)합니다.
- `parseFloat(값)`: 주어진 값을 파싱해 부동소수점 실수로 반환(숫자)합니다.

```js
const a = 0.1;
const b = 0.2;

a + b; // 0.30000000000000004
parseFloat((a + b).toFixed(1)); // 0.3
```

### 3) 불린

불린(boolean)은 `true`와 `false` 두 가지 값인 논리 데이터입니다.

```js
let a = true;
let b = false;
```

### 4) Null

존재하지 않는(nothing), 비어 있는(empty), 알 수 없는(unknown) 값을 명시적으로 나타냅니다.

```js
let age = null;
```

### 5) Undefined

'값이 할당되지 않은 상태'를 나타낼 때 사용합니다.  
변수는 선언했지만, 값을 할당하지 않았다면 해당 변수에 `undefined`가 자동으로 할당됩니다.

```js
let age;
alert(age); // undefined
```

```js
const user = {
  name: "HEROPY",
  age: 85,
};

console.log(user.name);
console.log(user.age);
console.log(user.email); // undefined
console.log(user.abc); // undefined
console.log(user.xyz); // undefined
```

### 6) 심볼

심볼(symbol)은 변경이 불가한 데이터로,  
유일한 식별자를 만들어 데이터를 보호하는 용도로 사용할 수 있습니다.  
심볼에 추가하는 '설명'은 단순 디버깅을 위한 용도일 뿐, 심볼 값과는 관계가 없습니다.

```js
// Symbol('설명')
const sKey = Symbol("Hello!");
const user = {
  key: "일반 정보!",
  [sKey]: "민감한 정보!",
};

console.log(user.key); // '일반 정보!'
console.log(user["key"]); // '일반 정보!'
console.log(user[sKey]); // '민감한 정보!'
console.log(user[Symbol("Hello!")]); // undefined
```

```js
// keys.js
export const birthKey = Symbol("Date of birth!");
export const emailsKey = Symbol("Emails!");

// heropy.js
import { birthKey, emailsKey } from "./keys.js";

export default {
  firstName: "YoungWoong",
  lastName: "Park",
  age: 38,
  [birthKey]: new Date(1985, 11, 16, 17, 30),
  [emailsKey]: ["thesecon@gmail.com", "abc@naver.com"],
};

// main.js
import heropy from "./heropy.js";
import { birthKey, emailsKey } from "./keys.js";

console.log(Object.keys(heropy));
for (const key in heropy) {
  console.log(heropy[key]);
}

console.log(heropy[birthKey]);
console.log(heropy[emailsKey]);
```

### 7) BigInt

BigInt는 길이 제한이 없는 정수(integer)입니다.  
숫자(number) 데이터가 안정적으로 표시할 수 있는 최대치(`2^53 - 1`)보다 큰 정수를 표현할 수 있습니다.  
정수 뒤에 `n`을 붙이거나 `BigInt()`를 호출해 생성합니다.

```js
console.log(1234567890123456789012345678901234567890);
// 1.2345678901234568e+39

console.log(1234567890123456789012345678901234567890n);
console.log(BigInt("1234567890123456789012345678901234567890"));
// 1234567890123456789012345678901234567890n
```
