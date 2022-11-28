# DOM

DOM(Document Object Model)이란 HTML 문서를 객체로 표현한 것으로,  
JS에서 HTML을 제어할 수 있게 해줍니다.

---

## Node vs Element

- 노드(Node): HTML 요소, 텍스트, 주석 등 모든 것을 의미
- 요소(Element): HTML 요소를 의미

```html
<div class="parent">
  <!-- 주석 -->
  <div class="child">1</div>
  텍스트1
  <div class="child">2</div>
  텍스트2
</div>
```

```js
const parentEl = document.querySelector(".parent");

// 부모 요소의 모든 자식 노드 확인!
console.log(parentEl.childNodes);
// NodeList(7) [text, comment, text, div.child, text, div.child, text]

// 부모 요소의 모든 자식 요소 확인!
console.log(parentEl.children);
// HTMLCollection(2) [div.child, div.child]
```

요소는 노드의 하위 객체입니다.

```js
class N {}
class E extends N {}

console.dir(E);
console.dir(N);
console.log(E.__proto__);

console.dir(Element);
console.dir(Node);
console.dir(Element.__proto__);
```

---

## 검색과 탐색

예제 이해를 위한 기본 HTML 구조

```html
<div class="parent">
  <!-- 주석 -->
  <div class="child">1</div>
  텍스트1
  <div id="child2" class="child">2</div>
  텍스트2
</div>
```

### document.getElementById()

HTML `id` 속성(Attributes) 값으로 검색한 요소를 반환합니다.  
여러 요소가 검색되면, 가장 먼저 찾은 요소만 반환합니다.  
검색 결과가 없으면, `null`을 반환합니다.

```js
const el = document.getElementById("child2");
console.log(el); // <div id="child2" class="child">2</div>
```

### document.querySelector()

'CSS 선택자'로 검색한 요소를 하나 반환합니다.  
여러 요소가 검색되면, 가장 먼저 찾은 요소만 반환합니다.  
검색 결과가 없으면, `null`을 반환합니다.

```js
const el = document.querySelector(".child:first-child");
console.log(el); // <div class="child">1</div>
```

### document.querySelectorAll()

'CSS 선택자'로 검색한 모든 요소를 `NodeList`로 반환합니다.  
`NodeList` 객체는 `.forEach()`를 사용할 수 있습니다.

```js
const nodeList = document.querySelectorAll(".child");
console.log(nodeList);
nodeList.forEach((el) => console.log(el.textContent));
// 1
// 2
```

### N.parentElement

노드의 부모 요소를 반환합니다.

```js
const el = document.querySelector(".child");
console.log(el.parentElement); // <div class="parent">...</div>
```

### E.closest()

자신을 포함한 조상 요소 중 'CSS 선택자'와 일치하는 가장 가까운 요소를 반환합니다.
요소를 찾지 못하면, `null`을 반환합니다.

```js
const el = document.querySelector(".child");

console.log(el.closest("div")); // <div class="child">1</div>
console.log(el.closest("body")); // <body>...</body>
console.log(el.closest(".hello")); // null
```

### N.previousSibling / N.nextSibling

노드의 이전 형제 혹은 다음 형제 노드를 반환합니다.

```js
const el = document.querySelector(".child");
console.log(el.previousSibling); // '\n    '
console.log(el.nextSibling); // '텍스트1'
```

### E.previousElementSibling / E.nextElementSibling

요소의 이전 형제 혹은 다음 형제 요소를 반환합니다.

```js
const el = document.querySelector(".child");
console.log(el.previousElementSibling); // null
console.log(el.nextElementSibling); // <div id="child2" class="child">2</div>
```

### E.children

요소의 모든 자식 요소를 반환합니다.

```js
const el = document.querySelector(".parent");
console.log(el.children); // HTMLCollection(2) [div.child, div.child]
```

### E.firstElementChild / E.lastElementChild

요소의 첫 번째 자식 혹은 마지막 자식 요소를 반환합니다.

```js
const el = document.querySelector(".parent");
console.log(el.firstElementChild); // <div class="child">1</div>
console.log(el.lastElementChild); // <div id="child2" class="child">2</div>
```

---

## 생성, 조회, 수정

예제 이해를 위한 기본 HTML 구조

```html
<div class="parent">
  <div class="child">1</div>
  <div class="child">2</div>
</div>
```

### document.createElement()

메모리에만 존재하는 새로운 HTML 요소를 생성해 반환합니다.

```js
const divEl = document.createElement("div");
console.log(divEl); // <div></div>

const inputEl = document.createElement("input");
console.log(inputEl); // <input>
```

#### E.prepend() / E.append()

지정된 여러 노드를 대상 요소의 첫 번째 혹은 마지막 자식으로 삽입합니다.

```js
요소.prepend(노드1, 노드2);
요소.append(노드1, 노드2);
```

```js
const parentEl = document.querySelector(".parent");

const el = document.createElement("div");
el.textContent = "Hello~";

parentEl.prepend(new Comment(" 주석 "));
parentEl.append(el, "Text!");
// parentEl.append(el)
// parentEl.append('Text!')
```

```html
<div class="parent">
  <!-- 주석 -->
  <div class="child">1</div>
  <div class="child">2</div>
  <div>Hello~</div>
  Text!
</div>
```

### E.remove()

요소를 제거합니다.

```js
const el = document.querySelector(".child");
el.remove();
```

### E.insertAdjacentElement()

'대상 요소'의 지정한 위치에 '새로운 요소'를 삽입합니다.

```js
대상_요소.insertAdjacentElement(위치, 새로운_요소);
```

각 위치는 다음과 같습니다.

```html
<!-- 'beforebegin' -->
<div class="target">
  <!-- 'afterbegin' -->
  Content!
  <!-- 'beforeend' -->
</div>
<!-- 'afterend' -->
```

```js
const childEl = document.querySelector(".child");
const newEl = document.createElement("span");
newEl.textContent = "Hello~";

childEl.insertAdjacentElement("beforebegin", newEl);
```

```html
<!-- 결과 -->
<div class="parent">
  <span>Hello~</span>
  <div class="child">1</div>
  <div class="child">2</div>
</div>
```
