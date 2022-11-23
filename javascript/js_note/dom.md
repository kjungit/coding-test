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
