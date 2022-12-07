## 이벤트 추가 및 제거

기본 구조

```html
<div class="parent">
  <div class="child">
    <a href="https://heropy.blog" target="_blank"> HEROPY! </a>
  </div>
</div>
```

```css
.parent {
  width: 300px;
  height: 200px;
  padding: 20px;
  border: 10px solid;
  background-color: red;
  overflow: auto;
}
.child {
  width: 200px;
  height: 1000px;
  border: 10px solid;
  background-color: orange;
  font-size: 40px;
}
```

### .addEventListener()

대상에 이벤트 청취(Listen)를 등록합니다.
대상에 지정한 이벤트가 발생했을 때 지정한 함수(Handler)가 호출됩니다.

```js
const parentEl = document.querySelector(".parent");
const childEl = document.querySelector(".child");

parentEl.addEventListener("click", () => {
  console.log("Parent!");
});
childEl.addEventListener("click", () => {
  console.log("Child!");
});
```

### .removeEventListener()

대상에 등록했던 이벤트 청취(Listen)를 제거합니다.  
메모리 관리를 위해 등록한 이벤트를 제거하는 과정이 필요할 수 있습니다.

```js
const parentEl = document.querySelector(".parent");
const childEl = document.querySelector(".child");

const handler = () => {
  console.log("Parent!");
};

parentEl.addEventListener("click", handler);
childEl.addEventListener("click", () => {
  parentEl.removeEventListener("click", handler);
});
```

이벤트 등록시 캡처(Capture) 옵션이 추가된 경우, 청취를 제거할 때도 캡처 옵션을 추가해야 합니다.  
그렇지 않으면 청취가 제거되지 않습니다.

```js
const parentEl = document.querySelector(".parent");
const childEl = document.querySelector(".child");

const handler = () => {
  console.log("Parent!");
};

parentEl.addEventListener("click", handler, {
  capture: true,
});
childEl.addEventListener("click", () => {
  parentEl.removeEventListener("click", handler, {
    capture: true,
  });
});
```

---

## 이벤트 객체

이벤트 객체는 대상에서 발생한 이벤트 정보를 담고 있습니다.

```html
<!-- 추가 요소 -->
<input type="text" />
```

```js
const parentEl = document.querySelector(".parent");

parentEl.addEventListener("click", (event) => {
  console.log(event.target, event.currentTarget);
});
parentEl.addEventListener("wheel", (event) => {
  console.log(event);
});

const inputEl = document.querySelector("input");
inputEl.addEventListener("keydown", (event) => {
  console.log(event.key);
});
```

### .target

이벤트가 발생한 요소입니다.

### .currentTarget

이벤트 청취가 등록된 요소입니다.

---

## 이벤트 제어

### 기본 동작 방지

```js
// 마우스 휠의 스크롤 동작 방지!
const parentEl = document.querySelector(".parent");
parentEl.addEventListener("wheel", (event) => {
  event.preventDefault();
});

// <a> 태그에서 페이지 이동 방지!
const anchorEl = document.querySelector("a");
anchorEl.addEventListener("click", (event) => {
  event.preventDefault();
});
```

### 이벤트 전파(버블) 정지

```js
const parentEl = document.querySelector(".parent");
const childEl = document.querySelector(".child");
const anchorEl = document.querySelector("a");

window.addEventListener("click", (event) => {
  console.log("Window!");
});
document.body.addEventListener("click", (event) => {
  console.log("Body!");
});
parentEl.addEventListener("click", (event) => {
  console.log("Parent!");
  event.stopPropagation(); // 버블링 정지!
});
childEl.addEventListener("click", (event) => {
  console.log("Child!");
});
anchorEl.addEventListener("click", (event) => {
  console.log("Anchor!");
});
```
