# 비동기

## 동기(Synchronous)와 비동기(Asynchronous)

- 동기: 순차적으로 코드 실행 O
- 비동기: 순차적으로 코드 실행 X

동기 예시:

```js
console.log(1);
console.log(2);
console.log(3);
// 1
// 2
// 3
```

비동기 예시:

```js
console.log(1);
setTimeout(() => console.log(2), 1000);
console.log(3);
// 1
// 3
// 2
```

```js
const btnEl = document.querySelector("button");
btnEl.addEventListener("click", () => {
  console.log("Clicked!");
});

console.log("Hello World!");
// 'Hello World!'
// 버튼을 누르면, 'Clicked!'
```

### 영화 검색 예시

쿼리스트링(Query string)은 URL 주소에 `키=값` 형태로 데이터를 담아 웹서버로 전달하는 방식입니다.  
`?`로 시작해서 `키=값`을 `&`로 구분합니다.

```plaintext
https://google.com?키1=값1&키2=값2&키3=값3
```

```js
fetch("https://www.omdbapi.com/?apikey=7035c60c&s=frozen").then((res) =>
  console.log(res)
);
```

```js
fetch("https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos", {
  method: "GET",
  headers: {
    "content-type": "application/json",
    apikey: "FcKdtJs202204",
    username: "ParkYoungWoong",
  },
  body: {},
})
  .then((res) => res.json())
  .then((res) => console.log(res));
```

## 콜백 패턴

```js
const a = () => console.log(1);
const b = () => console.log(2);

a();
b();
// 1
// 2
```

```js
const a = (callback) => {
  setTimeout(() => {
    console.log(1);
    callback();
  }, 1000);
};
const b = () => console.log(2);

a(() => {
  b();
});
// 1
// 2
```

```js
// 콜백 지옥(Callback hell)

const a = (callback) => {
  setTimeout(() => {
    console.log(1);
    callback();
  }, 1000);
};
const b = (callback) => {
  setTimeout(() => {
    console.log(2);
    callback();
  }, 1000);
};
const c = (callback) => {
  setTimeout(() => {
    console.log(3);
    callback();
  }, 1000);
};
const d = (callback) => {
  setTimeout(() => {
    console.log(4);
    callback();
  }, 1000);
};
// ...

a(() => {
  b(() => {
    c(() => {
      d(() => {
        // ...
      });
    });
  });
});
```

```js
// 영화 검색 예시

const getMovies = (movieName, callback) => {
  fetch(`https://www.omdbapi.com/?apikey=7035c60c&s=${movieName}`)
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      callback();
    });
};

getMovies("frozen", () => {
  console.log("겨울왕국!");
  getMovies("avengers", () => {
    console.log("어벤져스!");
    getMovies("avatar", () => {
      console.log("아바타!");
    });
  });
});
```
