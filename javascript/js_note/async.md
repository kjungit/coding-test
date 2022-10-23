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
