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

### N.contains()

'주어진 노드'가 '노드'의 자신을 포함한 후손인지 확인합니다.

```js
노드.contains(주어진_노드);
```

```js
const parentEl = document.querySelector(".parent");
const childEl = document.querySelector(".child");

console.log(parentEl.contains(childEl)); // true
console.log(document.body.contains(parentEl)); // true
console.log(document.body.contains(childEl)); // true
console.log(document.body.contains(document.body)); // true
console.log(parentEl.contains(parentEl)); // true
console.log(parentEl.contains(document.body)); // false
console.log(childEl.contains(document.body)); // false
```

### N.textContent

노드의 모든 텍스트를 얻거나 변경합니다.

```js
const el = document.querySelector(".child");
console.log(el.textContent); // '1'

el.textContent = "7";
console.log(el.textContent); // '7'
```

### E.innerHTML

요소의 모든 HTML 구조를 하나의 문자로 얻거나, 새로운 HTML 구조를 삽입합니다.

```js
const el = document.querySelector(".parent");
console.log(el.innerHTML);

el.innerHTML = '<span style="color: red;">Hello~</span>';
```

### E.dataset

요소의 각 `data-` 속성 값을 얻거나 지정합니다.

```js
const el = document.querySelector(".child");
const str = "Hello world!";
const obj = { a: 1, b: 2 };

el.dataset.helloWorld = str;
el.dataset.object = JSON.stringify(obj);

console.log(el.dataset.helloWorld); // 'Hello world!'
console.log(el.dataset.object); // '{"a":1,"b":2}'
console.log(JSON.parse(el.dataset.object)); // { a: 1, b: 2 }
```

```html
<!-- 결과 -->
<div class="child" data-hello-world="Hello world!" data-object='{"a":1,"b":2}'>
  1
</div>
```

### E.tagName

요소의 태그 이름을 반환합니다.

```js
const parentEl = document.querySelector(".parent");
const childEl = document.querySelector(".child");
const el = document.createElement("span");

console.log(parentEl.tagName); // 'DIV'
console.log(childEl.tagName); // 'DIV'
console.log(el.tagName); // 'SPAN'
console.log(document.body.tagName); // 'BODY'
```

### E.id

요소의 `id` 속성 값을 얻거나 지정합니다.

```js
const el = document.querySelector(".child");
console.log(el.id); // ''

el.id = "child1";
console.log(el.id); // 'child1'
console.log(el); // <div class="child" id="child1">1</div>
```

### E.className

요소의 `class` 속성 값을 얻거나 지정합니다.

```js
const el = document.querySelector(".child");
console.log(el.className); // 'child'

el.className += " child1 active";
console.log(el.className); // 'child child1 active'
console.log(el); // <div class="child child1 active">1</div>
```

### E.classList

요소의 `class` 속성 값을 제어합니다.

- `.add()`: 새로운 값을 추가
- `.remove()`: 기존 값을 제거
- `.toggle()`: 값을 토글
- `.contains()`: 값을 확인

```js
const el = document.querySelector(".child");

el.classList.add("active");
console.log(el.classList.contains("active")); // true

el.classList.remove("active");
console.log(el.classList.contains("active")); // false

el.addEventListener("click", () => {
  el.classList.toggle("active");
  console.log(el.classList.contains("active"));
});
```

### E.style

요소의 `style` 속성(인라인 스타일)의 CSS 속성 값을 얻거나 지정합니다.

```js
const el = document.querySelector(".child");

// 개별 지정!
el.style.width = "100px";
el.style.fontSize = "20px";
el.style.backgroundColor = "green";
el.style.position = "absolute";

// 한 번에 지정!
Object.assign(el.style, {
  width: "100px",
  fontSize: "20px",
  backgroundColor: "green",
  position: "absolute",
});

console.log(el.style); // CSSStyleDeclaration { ... }
console.log(el.style.width); // '100px'
console.log(el.style.fontSize); // '20px'
console.log(el.style.backgroundColor); // 'green'
console.log(el.style.position); // 'absolute'
```

```html
<!-- 결과 -->
<div
  class="child"
  style="width: 100px; font-size: 20px; background-color: green; position: absolute;"
>
  1
</div>
```

### window.getComputedStyle()

요소에 적용된 스타일 객체를 반환합니다.

```css
.child {
  width: 100px;
  font-size: 20px;
  background-color: green;
  position: absolute;
}
```

```js
const el = document.querySelector(".child");
const styles = window.getComputedStyle(el);

console.log(styles.width); // '100px'
console.log(styles.fontSize); // '20px'
console.log(styles.backgroundColor); // 'rgb(255, 0, 0)'
console.log(styles.position); // 'absolute'
```
