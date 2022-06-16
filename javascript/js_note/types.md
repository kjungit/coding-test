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
