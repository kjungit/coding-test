# 불변성 & 가변성

불변성(Immutability)은 생성된 데이터가 메모리에서 변경되지 않고,  
가변성(Mutability)은 생성된 데이터가 메모리에서 변경될 수 있음을 의미합니다.

자바스크립트 원시형(문자, 숫자, 불린, null, undefined, 심볼, BigInt)은 불변성을 가지고 있고,  
참조형(배열, 객체, 함수)은 가변성을 가지고 있습니다.

```html
<div class="container">
  <div class="item">
    <div>M1</div>
    <textarea></textarea>
  </div>
  <div class="item">
    <div>M2</div>
    <textarea></textarea>
  </div>
  <div class="item">
    <div>M3</div>
    <textarea></textarea>
  </div>
  <div class="item">
    <div>M4</div>
    <textarea></textarea>
  </div>
  <div class="item">
    <div>M5</div>
    <textarea></textarea>
  </div>
  <div class="item">
    <div>M6</div>
    <textarea></textarea>
  </div>
</div>
```

```css
.container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
```

원시형

```js
let a = 1;
let b = a;

b = 2;

console.log(b); // 2
console.log(a); // 1
```

객체

```js
let a = { x: 1 };
let b = a;

b.x = 2;

console.log(b.x); // 2
console.log(a.x); // 2
```

배열

```js
let a = [1, 2, 3];
let b = a;

b[0] = 4;

console.log(b); // [4, 2, 3]
console.log(a); // [4, 2, 3]
```

함수

```js
let a = () => 1;
let b = a;

b.x = 2;

console.log(b.x); // 2
console.log(a.x); // 2
```

---

# 얕은 복사 & 깊은 복사

참조형은 가변성으로 인해, 데이터를 복사할 때 주의가 필요합니다.

- 얕은 복사(Shallow Copy) - 참조형의 1차원 데이터만 복사
- 깊은 복사(Deep Copy) - 참조형의 모든 차원 데이터를 복사

## 객체 예제

```js
const a = { x: 1 };
const b = a;

b.x = 2;

console.log(b); // { x: 2 }
console.log(a); // { x: 2 }
```

```js
const a = { x: 1 };
const b = { ...a }; // 얕은 복사!
// const b = Object.assign({}, a) // 얕은 복사!

b.x = 2;

console.log(b); // { x: 2 }
console.log(a); // { x: 1 }
```

참조형 내 참조형이 포함된 경우 얕은 복사만으로는 완전히 새로운 데이터를 만들 수 없습니다.

```js
const a = { x: { y: 1 } };
const b = { ...a }; // 얕은 복사!

b.x.y = 2;

console.log(b); // { x: { y: 2 } }
console.log(a); // { x: { y: 2 } }
```

참조형 내 참조형이 수 많은 깊이를 가지더라도 완전히 새로운 데이터를 만들 수 있도록,  
Lodash 패키지의 cloneDeep 함수를 사용할 수 있습니다.

```js
import cloneDeep from "lodash/cloneDeep";

const a = { x: { y: 1 } };
const b = cloneDeep(a); // 깊은 복사!

b.x.y = 2;

console.log(b); // { x: { y: 2 } }
console.log(a); // { x: { y: 1 } }
```

## 배열 예제

```js
const a = [1, 2, 3];
const b = a;

b[0] = 4;

console.log(b); // [4, 2, 3]
console.log(a); // [4, 2, 3]
```

```js
const a = [1, 2, 3];
const b = [...a]; // 얕은 복사!
// const b = a.concat([]) // 얕은 복사!

b[0] = 4;

console.log(b); // [4, 2, 3]
console.log(a); // [1, 2, 3]
```

```js
const a = [[1, 2], [3]];
const b = [...a];

b[0][0] = 4;

console.log(b); // [[4, 2], [3]]
console.log(a); // [[4, 2], [3]]
```

```js
import cloneDeep from "lodash/cloneDeep";

const a = [[1, 2], [3]];
const b = cloneDeep(a);

b[0][0] = 4;

console.log(b); // [[4, 2], [3]]
console.log(a); // [[1, 2], [3]]
```

---

# 가비지 컬렉션

가비지 컬렉션(GC, Garbage Collection, 쓰레기 수집)은 자바스크립트의 메모리 관리 방법으로,  
자바스크립트 엔진이 자동으로 데이터가 할당된 메모리에서 더 이상 사용되지 않는 데이터를 해제하는 것을 말합니다.  
가비지 컬렉션은 자동으로 동작하기 때문에, 개발자가 직접 강제 실행하거나 관리할 수 없습니다.

```js
let a = { x: 1 };
let b = a;

b.x = 2;
console.log(b); // { x: 2 }
console.log(a); // { x: 2 }

// 가비지 컬렉션을 통해 숫자 1은 메모리에서 해제!
```

```js
const user = {
  name: "Heropy",
  age: 85,
  emails: ["thesecon@gmail.com", "heropy@abc.com"],
};

delete user.emails;
console.log(user); // { name: 'Heropy', age: 85 }

// 가비지 컬렉션을 통해 이메일 배열은 메모리에서 해제!
```

# 클로저

클로저(Closure)는 함수가 선언될 때의 유효범위(렉시컬 범위)를 기억하고 있다가,  
함수가 외부에서 호출될 때 그 유효범위의 특정 변수를 참조할 수 있는 개념을 말합니다.

```js
function createCount() {
  let a = 0;
  return function () {
    return (a += 1);
  };
}

const count = createCount();

console.log(count()); // 1
console.log(count()); // 2
console.log(count()); // 3
```

## 활용 예제

```html
<h1>Hello world!</h1>
<h2>Hello world!</h2>
```

클로저를 사용하지 않은 예제

```js
const h1El = document.querySelector("h1");
const h2El = document.querySelector("h2");

// 별도의 상태 관리가 필요!
let h1IsRed = false;
let h2IsRed = false;

h1El.addEventListener("click", (event) => {
  h1IsRed = !h1IsRed;
  h1El.style.color = h1IsRed ? "red" : "black";
});
h2El.addEventListener("click", (event) => {
  h2IsRed = !h2IsRed;
  h2El.style.color = h2IsRed ? "red" : "black";
});
```

클로저를 사용한 예제

```js
const h1El = document.querySelector("h1");
const h2El = document.querySelector("h2");

// 하나의 함수로 정리!
const createToggleHandler = () => {
  let isRed = false;
  return (event) => {
    isRed = !isRed;
    event.target.style.color = isRed ? "red" : "black";
  };
};
h1El.addEventListener("click", createToggleHandler());
h2El.addEventListener("click", createToggleHandler());
```

# 메모리 누수

메모리 누수(Memory Leak)란, 더 이상 필요하지 않은 데이터가 해제되지 못하고 메모리를 계속 차지되는 현상입니다.
