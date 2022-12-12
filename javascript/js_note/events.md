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

### 이벤트 캡처

```js
const parentEl = document.querySelector(".parent");
const childEl = document.querySelector(".child");
const anchorEl = document.querySelector("a");

window.addEventListener("click", (event) => {
  console.log("Window!");
});
document.body.addEventListener(
  "click",
  (event) => {
    console.log("Body!");
  },
  { capture: true }
);
parentEl.addEventListener(
  "click",
  (event) => {
    console.log("Parent!");
    event.stopPropagation(); // 전파(버블링, 캡처링) 정지!
  },
  { capture: true }
);
childEl.addEventListener("click", (event) => {
  console.log("Child!");
});
anchorEl.addEventListener("click", (event) => {
  console.log("Anchor!");
});
```

이벤트 캡처 핸들러의 경우, 이벤트를 제거할 때 캡처 옵션이 있어야 제거할 수 있습니다!

```js
// 이벤트 추가!
parentEl.addEventListener("click", handler, {
  capture: true,
});

// 이벤트 제거!
parentEl.removeEventListener("click", handler, {
  capture: true,
});
```

### 핸들러 한 번만 실행

```js
const parentEl = document.querySelector(".parent");

parentEl.addEventListener(
  "click",
  (event) => {
    console.log("Parent!");
  },
  {
    once: true,
  }
);
```

### 기본 동작과 핸들러 실행 분리

- 사용성 증가
- 성능 향상

```js
const parentEl = document.querySelector(".parent");

parentEl.addEventListener(
  "wheel",
  (event) => {
    for (let i = 0; i < 10000; i += 1) {
      console.log(i);
    }
  },
  {
    passive: true,
  }
);
```

---

## 이벤트 위임(Delegation)

비슷한 패턴의 여러 요소에서 이벤트를 핸들링해야 하는 경우,
단일 조상 요소에서 제어하는 이벤트 위임 패턴을 사용할 수 있습니다.

```html
<div class="parent">
  <div class="child">1</div>
  <div class="child">2</div>
  <div class="child">3</div>
  <div class="child">4</div>
</div>
```

```js
const parentEl = document.querySelector(".parent");
const childEls = document.querySelectorAll(".child");

// 모든 대상 요소에 이벤트 등록!
childEls.forEach((el) => {
  el.addEventListener("click", (event) => {
    console.log(event.target.textContent);
  });
});

// 조상 요소에 이벤트 위임!
parentEl.addEventListener("click", (event) => {
  const childEl = event.target.closest(".child");
  if (childEl) {
    console.log(childEl.textContent);
  }
});
```

## 커스텀 이벤트

```js
대상.dispatchEvent(이벤트);
```

```js
const child1 = document.querySelector(".child:nth-child(1)");
const child2 = document.querySelector(".child:nth-child(2)");

child1.addEventListener("click", (event) => {
  // 강제로 이벤트 발생!
  child2.dispatchEvent(new Event("click"));
  child2.dispatchEvent(new Event("wheel"));
  child2.dispatchEvent(new Event("keydown"));
});
child2.addEventListener("click", (event) => {
  console.log("Child2 Click!");
});
child2.addEventListener("wheel", (event) => {
  console.log("Child2 Wheel!");
});
child2.addEventListener("keydown", (event) => {
  console.log("Child2 Keydown!");
});
```

`CustomEvent` 생성자의 `detail` 옵션을 사용해,
`event.detail` 속성으로 데이터를 전달할 수 있습니다.

```js
const child1 = document.querySelector(".child:nth-child(1)");
const child2 = document.querySelector(".child:nth-child(2)");

child1.addEventListener("hello-world", (event) => {
  console.log("커스텀 이벤트 발생!");
  console.log(event.detail); // ?!
});

child2.addEventListener("click", (event) => {
  // 일반 이벤트!
  child1.dispatchEvent(
    new Event("hello-world", {
      detail: 123, // undefined
    })
  );
  // 커스텀 이벤트!
  child1.dispatchEvent(
    new CustomEvent("hello-world", {
      detail: 123, // 123
    })
  );
});
```

---

## 이벤트 종류

https://developer.mozilla.org/ko/docs/Web/Events

### UI Events

| 이벤트           | 설명                                              |
| ---------------- | ------------------------------------------------- |
| DOMContentLoaded | DOM 트리를 완성했을 때                            |
| load             | DOM 트리를 완성 후 기타 자원 로드가 완료되었을 때 |
| abort            | 로드가 중단되었을 때                              |
| unload           | 페이지가 닫힐 때                                  |
| error            | 오류가 발생하거나 리소스가 존재하지 않는 경우     |
| resize           | 크기를 조절할 때                                  |
| scroll           | 스크롤할 때                                       |
| select           | 텍스트를 선택했을 때                              |
| fullscreenchange | 전체화면 모드나 일반 모드로 변경될 때             |

### Mouse Events

| 이벤트      | 설명                      |
| ----------- | ------------------------- |
| click       | 클릭했을 때               |
| dblclick    | 더블 클릭했을 때          |
| mousedown   | 버튼을 누를 때            |
| mouseup     | 버튼을 뗄 때              |
| mouseenter  | 포인터가 요소로 들어갈 때 |
| mouseleave  | 포인터가 요소에서 나올 때 |
| mousemove   | 포인터가 움직일 때        |
| contextmenu | 우클릭했을 때             |
| wheel       | 휠 버튼이 회전할 때       |

```html
<div class="parent">
  <div class="child"></div>
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
}
.child.active {
  background-color: yellowgreen;
}
```

```js
const parentEl = document.querySelector(".parent");
const childEl = document.querySelector(".child");
```

#### click, dblclick

```js
childEl.addEventListener("click", (event) => {
  event.target.classList.toggle("active");
});
```

#### mousedown, mouseup, mouseenter, mouseleave

```js
childEl.addEventListener("mousedown", (event) => {
  event.target.classList.add("active");
});
childEl.addEventListener("mouseup", (event) => {
  event.target.classList.remove("active");
});
```

#### mousemove

```js
childEl.addEventListener("mousemove", (event) => {
  console.log(event.offsetX, event.offsetY);
  // console.log(event.x, event.y)
});
```

#### contextmenu

```js
childEl.addEventListener("contextmenu", (event) => {
  event.preventDefault();
  console.log("childEl!");
});
```

#### wheel

```js
parentEl.addEventListener(
  "wheel",
  (event) => {
    console.log("Parent!");
  },
  {
    passive: true,
  }
);
```

### Keyboard Events

| 이벤트  | 설명         |
| ------- | ------------ |
| keydown | 키를 누를 때 |
| keyup   | 키를 땔 때   |

```html
<input type="text" />
```

```js
const inputEl = document.querySelector("input");

inputEl.addEventListener("keydown", (event) => {
  console.log(event.key);
});
```

#### isComposing

브라우저 입력기(IME)의 CJK(중국어, 일본어, 한글) 문자 구성 중에는 이벤트의 동작을 무시할 수 있습니다.

```js
inputEl.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && !event.isComposing) {
    console.log(event.target.value);
  }
});
```

### Focus & Form Events

| 이벤트         | 설명                      |
| -------------- | ------------------------- |
| focus(focusin) | 요소가 포커스를 얻었을 때 |
| blur(focusout) | 요소가 포커스를 잃었을 때 |
| input          | 값이 변경되었을 때        |
| change         | 상태가 변경되었을 때      |
| submit         | 제출 버튼을 선택했을 때   |
| reset          | 리셋 버튼을 선택했을 때   |

```html
<form>
  <input type="text" placeholder="ID" />
  <input type="password" placeholder="PW" />
  <button type="submit">제출</button>
  <button type="reset">초기화</button>
</form>
```

```js
const formEl = document.querySelector("form");
const inputEls = document.querySelectorAll("input");

inputEls.forEach((el) => {
  el.addEventListener("focus", () => {
    formEl.classList.add("active");
  });
  el.addEventListener("blur", () => {
    formEl.classList.remove("active");
  });
  el.addEventListener("input", (event) => {
    console.log(event.target.value);
  });
});

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = {
    id: event.target[0].value,
    pw: event.target[1].value,
  };
  console.log("제출!", data);
});

formEl.addEventListener("reset", (event) => {
  console.log("리셋!");
});
```

### 기타

| Event      | Description                                         |
| ---------- | --------------------------------------------------- |
| hashchange | 페이지의 해시가 변경될 때                           |
| popstate   | 뒤로가기나 앞으로가기로 페이지 히스토리를 이동할 때 |
