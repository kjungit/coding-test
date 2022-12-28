# Web APIs

---

## Console

### .log(), .warn(), .error(), .dir()

콘솔에 메시지나 객체를 출력합니다.

- log: 일반 메시지
- warn: 경고 메시지
- error: 에러 메시지
- dir: 속성을 볼 수 있는 객체를 출력

```js
console.log(document.body); //     <body>...</body>
console.warn(document.body); // (!) <body>...</body>
console.error(document.body); // (x) <body>...</body>
console.dir(document.body); //     > body
```

### .count(), .countReset()

콘솔에 메소드 호출의 누적 횟수를 출력하거나 초기화합니다.

```js
console.count("이름");
console.countReset("이름");
```

```js
console.count("a"); // 'a: 1'
console.count("a"); // 'a: 2'
console.count("b"); // 'b: 1'
console.count("a"); // 'a: 3'
console.log("Reset a!"); // 'Reset a!'
console.countReset("a");
console.count("a"); // 'a: 1'
console.count("b"); // 'b: 2'

console.count(); // 'default: 1'
console.count(); // 'default: 2'
console.count("default"); // 'default: 3'
console.count(); // 'default: 4'
```

### .time(), .timeEnd()

콘솔에 타이머가 시작해서 종료되기까지의 시간(ms)을 출력합니다.

```js
console.time("이름");
console.timeEnd("이름");
```

```js
console.time("반복문");

for (let i = 0; i < 10000; i += 1) {
  console.log(i);
}

console.timeEnd("반복문"); // '반복문: 170.137...ms'
```

### .trace()

메소드 호출 스택(Call Stack)을 추적해 출력합니다.

```js
function a() {
  function b() {
    function c() {
      console.log("Log!");
      console.trace("Trace!");
    }
    c();
  }
  b();
}
a();

// Log!
// Trace!
// c
// b
// a
// (anonymous)
```

### .clear()

콘솔에 기록된 메시지를 모두 삭제합니다.

```js
console.log(1);
console.log(2);
console.log(3);
console.clear(); // 콘솔 삭제됨
```

### 서식 문자 치환

- `%s` - 문자로 적용
- `%o` - 객체로 적용
- `%c` - CSS를 적용

```js
const a = "The brown fox";
const b = 3;
const c = {
  f: "fox",
  d: "dog",
};
console.log("%s jumps over the lazy dog %s times.", a, b);
console.log("%o is Object!", c);
console.log(
  "%cThe brown fox %cjumps over %cthe lazy dog.",
  "color: brown; font-family: serif; font-size: 20px;",
  "",
  "font-size: 18px; color: #FFF; background-color: green; border-radius: 4px;"
);
```

---

## Cookie

### 개요

- 도메인 단위로 저장
- 모든 웹 요청에 포함돼 서버로 전송
- 표준안 기준, 사이트당 최대 20개 및 4KB로 제한
- 영구 저장 불가능

### 옵션

- `domain`: 유효 도메인 설정 - `domain=localhost;`
- `path`: 유효 경로 설정 - `path=/;`
- `expires`: 만료 날짜(UTC Date) 설정
- `max-age`: 만료 타이머(s) 설정
- `secure`: HTTPS 보안 프로토콜만 전송 - `secure;`
- `samesite`: 크로스 사이트 요청 처리 여부(`none`, `lax`, `strict`) - `samesite=none`

### 예제

```js
console.log(document.cookie);

// Set
document.cookie = "a=1; max-age=2;"; // 초(second)!
document.cookie = `b=2; expires=${new Date(2022, 0, 1).toUTCString()};`; // 국제 표준 시간!
document.cookie = "c=3;";
// document.cookie = 'a=4;' // 새로운 값으로 덮어쓰기!

// Get
console.log(getCookie("a")); // '1'
console.log(getCookie("b")); // null
console.log(getCookie("c")); // '3'

setTimeout(() => {
  console.log(getCookie("a")); // null
  console.log(getCookie("b")); // null
  console.log(getCookie("c")); // '3'
}, 2000);

function getCookie(name) {
  const cookie = document.cookie
    .split("; ")
    .find((cookie) => cookie.startsWith(name));
  // .find(cookie => cookie.split('=')[0] === name)
  return cookie ? cookie.split("=")[1] : null;
}
```

---

## Storage

### 개요

- 도메인 단위로 저장
- 서버로 전송되지 않음
- 5MB 제한
- 세션 혹은 영구 저장 가능

### 종류

- `sessionStorage`: 브라우저 세션이 유지되는 동안에만 데이터 저장
- `localStorage`: 따로 제거하지 않으면 영구적으로 데이터 저장

### 메소드

- `.getItem()`: 데이터 조회
- `.setItem()`: 데이터 추가
- `.removeItem()`: 데이터 제거
- `.clear()`: 스토리지 초기화

### 예제

```js
// 항상 JSON.stringify()를 통해 JSON 문자로 변환해 저장하는 것을 권장!
localStorage.setItem("a", JSON.stringify("Hello world!"));
// localStorage.setItem('a', 'Hello world!') // ...
localStorage.setItem("b", JSON.stringify({ x: 1, y: 2 }));
localStorage.setItem("c", JSON.stringify(123));

console.log(localStorage.getItem("a")); // 'Hello world!'
console.log(localStorage.getItem("b")); // '{"x":1,"y":2}'
console.log(localStorage.getItem("c")); // '123'

console.log(JSON.parse(localStorage.getItem("a"))); // 'Hello world!'
console.log(JSON.parse(localStorage.getItem("b"))); // { x: 1, y: 2 }
console.log(JSON.parse(localStorage.getItem("c"))); // 123

// 개별 아이템 삭제!
localStorage.removeItem("a");
console.log(JSON.parse(localStorage.getItem("a"))); // null

// 스토리지 초기화!
localStorage.clear();
console.log(JSON.parse(localStorage.getItem("a"))); // null
console.log(JSON.parse(localStorage.getItem("b"))); // null
console.log(JSON.parse(localStorage.getItem("c"))); // null
```

---

## Location

현재 페이지 정보를 반환하거나 제어합니다.

### 속성

- `.href`: 전체 URL 주소
- `.protocol`: 프로토콜 - `'http:'` or `'https:'`
- `.hostname`: 도메인 이름 - `'google.com'`
- `.pathname`: 도메인 이후 경로 - `'/a/b/c'`
- `.host`: 포트 번호를 포함한 도메인 이름 - `'google.com:5500'`
- `.port`: 포트 번호 - `'5500'`
- `.hash`: 해시 정보(페이지의 ID) - `''` or `'#abc'`

### 메소드

페이지가 항상 새로고침됩니다.

- `.assign(주소)`: 해당 '주소'로 페이지 이동
- `.replace(주소)`: 해당 '주소'로 페이지 이동, 현재 페이지 히스토리를 제거
- `.reload(강력)`: 페이지 새로고침, `true` 인수는 '강력' 새로고침

---

## Location

현재 페이지 정보를 반환하거나 제어합니다.

### 속성

- `.href`: 전체 URL 주소
- `.protocol`: 프로토콜 - `'http:'` or `'https:'`
- `.hostname`: 도메인 이름 - `'google.com'`
- `.pathname`: 도메인 이후 경로 - `'/a/b/c'`
- `.host`: 포트 번호를 포함한 도메인 이름 - `'google.com:5500'`
- `.port`: 포트 번호 - `'5500'`
- `.hash`: 해시 정보(페이지의 ID) - `''` or `'#abc'`

### 메소드

페이지가 항상 새로고침됩니다.

- `.assign(주소)`: 해당 '주소'로 페이지 이동
- `.replace(주소)`: 해당 '주소'로 페이지 이동, 현재 페이지 히스토리를 제거
- `.reload(강력)`: 페이지 새로고침, `true` 인수는 '강력' 새로고침

---

## History

브라우저 히스토리(세션 기록) 정보를 반환하거나 제어합니다.

### 속성

- `.length`: 등록된 히스토리 개수
- `.scrollRestoration`: 스크롤 위치 복원 여부 - `'auto'` / `'manual'`
- `.state`: 현재 히스토리에 등록된 데이터(상태)

### 메소드

모든 브라우저(Safari 제외)는 `.pushState()`와 `.replaceState()`의 '제목' 옵션을 무시합니다.  
`.pushState()`와 `.replaceState()` 호출은 `popstate` 이벤트가 발생하지 않습니다!

- `.back()`: 뒤로 가기
- `.forward()`: 앞으로 가기
- `.go(위치)`: 현재 페이지 기준 특정 히스토리 '위치'로 이동 - `.go(-2)`
- `.pushState(상태, 제목, 주소)`: 히스토리에 상태 및 주소를 추가
- `.replaceState(상태, 제목, 주소)`: 현재 히스토리의 상태 및 주소를 교체

### 예제

```html
<nav>
  <a href="#/page1">p1</a> / <a href="#/page2">p2</a> /
  <a href="#/page3">p3</a> /
  <input type="text" />
</nav>
<div id="app">
  <section id="/page1" class="page1">
    <h1>Page 1</h1>
  </section>
  <section id="/page2" class="page2">
    <h1>Page 2</h1>
  </section>
  <section id="/page3" class="page3">
    <h1>Page 3</h1>
  </section>
</div>
```

```css
body {
  margin: 0;
}
nav {
  background-color: white;
  padding: 10px;
  border: 4px solid;
  position: fixed;
  bottom: 0;
  right: 0;
}
nav input {
  width: 50px;
}
section {
  height: 100vh;
  border: 10px solid;
  box-sizing: border-box;
}
section.page1 {
  color: red;
}
section.page2 {
  color: orange;
}
section.page3 {
  color: green;
}
```

```js
const page1 = /* html */ `
  <section class="page1">
    <h1>Page 1</h1>
  </section>`;
const page2 = /* html */ `
  <section class="page2">
    <h1>Page 2</h1>
  </section>`;
const page3 = /* html */ `
  <section class="page3">
    <h1>Page 3</h1>
  </section>`;
const pageNotFound = /* html */ `
  <section>
    <h1>404 Page Not Found!</h1>
  </section>`;

const pages = [
  { path: "#/page1", template: page1 },
  { path: "#/page2", template: page2 },
  { path: "#/page3", template: page3 },
];
const appEl = document.querySelector("#app");

const render = () => {
  // console.log(history.state)
  const page = pages.find((page) => page.path === location.hash);
  appEl.innerHTML = page ? page.template : pageNotFound;
};

window.addEventListener("hashchange", render);
// window.addEventListener('popstate', render)

// 최초 랜더링!
render();

const pagePush = (num) => {
  location.hash = `/page${num}`;
  // history.pushState(`전달할 데이터 - ${num}`, null, `#/page${num}`)
  // render()
};

const inputEl = document.querySelector("nav input");
inputEl.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    pagePush(event.target.value);
  }
});
```
