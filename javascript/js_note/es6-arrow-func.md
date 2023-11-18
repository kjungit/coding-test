# ES6에서 Arrow 함수를 언제, 왜 쓸까?

<br>

Arrow 함수(arrow function)를 언제, 왜 사용하는지 그 이유들을 알아봅시다.

<br>

## 1. 함수 본연의 기능을 아주 잘 표현하는 문법입니다.

보통 프로그래밍할 때 function 문법은 아래와 같은 이유로 많이 사용합니다.

- 여러가지 기능을 하는 코드를 한 단어로 묶고 싶을 때 (그리고 나중에 재사용할 때)
- [입출력기능](#gear-입출력기능)을 만들 때

<br>

그리고 `arrow function`을 사용하면 함수 본연의 입출력기능을 아주 직관적으로 잘 표현해줍니다.

<br>

```js
let 두배만들기 = (x) => {
  return x * 2;
};

console.log(두배만들기(4));
console.log(두배만들기(8));
```

<br>

`arrow function`을 쓰면 입출력기능이 쉽고 예쁘게 표현되는 것이 `arrow function`를 쓰는 이유 중 하나입니다.

<br>

<br>
