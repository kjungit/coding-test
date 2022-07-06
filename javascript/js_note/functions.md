# 함수(Functions)

## 함수 데이터(Data)와 함수 호출(Call)

```js
function hello() {
  return "Hello~";
}
console.log(hello); // ƒ hello() { return 'Hello~' }
console.log(hello()); // 'Hello~'
```

## 선언과 표현

### 함수 선언문(Declaration)

함수 선언문은 `function` 키워드로 시작해 함수 이름을 필수로 지정하는 기명 함수입니다.

```js
function hello() {
  console.log("Hello~");
}
```

### 함수 표현식(Expression)

함수 표현식은 변수에 함수를 할당하는 것을 말합니다.

```js
const hello = function () {
  console.log("Hello~");
};
```

기명 함수 선언과 **동시에** 변수에 할당하면 표현식입니다.  
함수 선언의 이름은 제거됩니다.

```js
const exp = function dec() {};
exp(); // OK!
dec(); // Error..
```

### 호이스팅(Hoisting)

호이스팅은 함수 선언부가 유효범위 최상단으로 끌어올려지는 현상을 말합니다.

- 함수 선언문은 호이스팅 O
- 함수 표현식은 호이스팅 X

```js
hello1();
hello2(); // Error!

// 함수 선언문
function hello1() {
  console.log("Hello~1");
}

// 함수 표현식
const hello2 = function () {
  console.log("Hello~2");
};
```

> 과자 이름보다 과자 성분표시가 먼저 나오는 것이 이상한 것처럼, 호이스팅을 활용해 함수 로직이 먼저 등장하지 않도록 작성할 수 있습니다.
