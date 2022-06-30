# 연산자(Operators)

연산자(operator)는 `+`, `-`, `*`, `=`, `===`, `!` 같은 기호로, 이는 더하기, 빼기, 곱하기, 할당, 비교, 부정 등의 의미를 가집니다.

## 산술(Arithmetic)

```js
console.log(1 + 2); // 3
console.log(5 - 7); // -2
console.log(3 * 4); // 12
console.log(10 / 2); // 5
console.log(7 % 5); // 2
```

## 할당(Assignment)

```js
let a = 3;

// a = a + 2
a += 2;

// a = a - 2
a -= 2;

// a = a * 2
a *= 2;

// a = a / 2
a /= 2;

// a = a % 2
a %= 2;

console.log(a); // 5, 1, 6, 1.5, 1
```

## 증감(Increment & Decrement)

증감 연산자는 `1`을 더하거나 빼는 연산자입니다.

```js
// 증가 연산자
// ++ 기호가 뒤에 있는 경우,
let a = 3;

console.log(a++); // 3
console.log(a); // 4

// ++ 기호가 앞에 있는 경우,
let a = 3;

console.log(++a); // 4
console.log(a); // 4
```

```js
// 감소 연산자
// -- 기호가 뒤에 있는 경우,
let a = 3;

console.log(a--); // 3
console.log(a); // 2

// -- 기호가 앞에 있는 경우,
let a = 3;

console.log(--a); // 2
console.log(a); // 2
```

증감 연산자는 변수 앞뒤 위치에 따라 다른 결과가 만들어지기 때문에, 직관적으로 더하기할당(`+=`) 혹은 빼기할당(`-=`) 연산자를 사용하는 것도 좋습니다.

```js
let a = 3;

a += 1;
console.log(a); // 4

a -= 1;
console.log(a); // 3
```

## 부정(Negation)

참(Truthy)과 거짓(Falsy)의 반댓값을 불린(Boolean) 데이터로 반환합니다.

```js
console.log(!true); // false
console.log(!false); // true

// 중첩 사용
console.log(!0); // true
console.log(!!0); // false
console.log(!!!0); // true
console.log(!!!!0); // false

// Falsy
console.log(!null); // true
console.log(!NaN); // true
console.log(!undefined); // true
console.log(!""); // true

// Truthy
console.log(!{}); // false
console.log(![]); // false
console.log(!"A"); // false
```

## 비교(Comparison)

```js
const a = 1;
const b = 3;

// 동등(형 변환!)
console.log(a == b); // false

// 부등(형 변환!)
console.log(a != b); // true

// 일치
console.log(a === b); // false

// 불일치
console.log(a !== b); // true

// 큼
console.log(a > b); // false

// 크거나 같음
console.log(a >= b); // false

// 작음
console.log(a < b); // true

// 작거나 같음
console.log(a <= b); // true
```

## 논리(Logical)

```js
// AND 연산자
const a = true;
const b = false;

if (a && b) {
  console.log("모두 참!"); // 출력 X
}

console.log(a && b); // false
```

```js
// OR 연산자
const a = true;
const b = false;

if (a || b) {
  console.log("하나 이상 참!"); // 출력 O
}

console.log(a || b); // true
```

AND 연산자는 왼쪽에서부터 가장 먼저 만나는 거짓(Falsy) 데이터를 반환합니다.  
끝까지 거짓이 없으면 가장 오른쪽의 마지막 참(Truthy) 데이터를 반환합니다.

```js
// AND 연산자
console.log(true && false); // false
console.log(1 && 0); // 0
console.log(1 && 2 && 0); // 0
console.log(1 && 0 && 2); // 0
console.log(0 && 1 && 2); // 0
console.log("A" && "B" && ""); // ''
console.log("A" && "B" && "C"); // 'C'
```

OR 연산자는 왼쪽에서부터 가장 먼저 만나는 참(Truthy) 데이터를 반환합니다.  
끝까지 참이 없으면 가장 오른쪽의 마지막 거짓(Falsy) 데이터를 반환합니다.

```js
// OR 연산자
console.log(false || true); // true
console.log(0 || 1); // 1
console.log(false || 0 || {}); // {}
console.log(false || [] || null); // []
console.log(function () {} || undefined || ""); // f () {}
console.log(false || 0 || NaN); // NaN
```
