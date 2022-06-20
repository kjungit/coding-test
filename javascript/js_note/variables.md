# 변수

## var

- 함수 레벨 유효범위(Function-level scope)
- 재할당 O
- 중복 선언 O
- 호이스팅 O
- 전역 선언시 전역 객체의 속성으로 등록 O

> 호이스팅(Hoisting)이란, 특정 선언이 유효한 범위의 최상단으로 끌어올려져 선언되는 것을 말합니다.

```js
function fn() {
  console.log(n); // undefined
  if (true) {
    var n = 123;
    n = 456;
    console.log(n); // 456
    var n = "ABC";
  }
  console.log(n); // 'ABC'
}
fn();

console.log(n); // ReferenceError!

var xyz = "XYZ";
console.log(window.xyz); // 'XYZ'
```

## const

- 블록 레벨 유효범위(Block-level scope)
- 재할당 X
- 중복 선언 X
- 호이스팅 X
- 전역 선언시 전역 객체의 속성으로 등록 X

```js
function fn() {
  console.log(n); // ReferenceError!
  if (true) {
    const n = 123;
    n = 456; // TypeError!
    console.log(n); // 123
    const n = "ABC"; // SyntaxError!
  }
  console.log(n); // ReferenceError!
}
fn();

console.log(n); // ReferenceError!

const xyz = "XYZ";
console.log(window.xyz); // undefined
```

## let

- 블록 레벨 유효범위(Block-level scope)
- 재할당 O
- 중복 선언 X
- 호이스팅 X
- 전역 선언시 전역 객체의 속성으로 등록 X

```js
function fn() {
  console.log(n); // ReferenceError!
  if (true) {
    let n = 123;
    n = 456;
    console.log(n); // 456
    let n = "ABC"; // SyntaxError!
  }
  console.log(n); // ReferenceError!
}
fn();

console.log(n); // ReferenceError!

let xyz = "XYZ";
console.log(window.xyz); // undefined
```
