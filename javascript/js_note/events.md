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
