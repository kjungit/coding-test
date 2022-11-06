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
