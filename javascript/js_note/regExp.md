# 정규표현식

정규표현식(RegExp, Regular Expression, 정규식)은 문자열을 확인, 대체, 추출하는 용도로 사용되는 패턴입니다.

- 문자 확인(Search)
- 문자 대체(Replace)
- 문자 추출(Extract)

https://regexr.com/

```js
// 테스트 문자
const str = `
010-1234-5678
thesecon@gmail.com
Hello world!
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
hello@naver.com
http://localhost:1234
동해물과 백두산이 마르고 닳도록
abbcccddddeeeee
`;
```

## 정규식 생성

```js
// 생성자
new RegExp("표현", "옵션");
new RegExp("[a-z]", "gi") /
  // 리터럴
  표현 /
  옵션 /
  [a - z] /
  gi;
```

```js
const regexp = new RegExp("the", "gi"); // 생성자
const regexp = /the/gi; // 리터럴

console.log(str.match(regexp));
```

## 메소드

| 메소드  | 문법                               | 설명                             |
| ------- | ---------------------------------- | -------------------------------- |
| test    | `정규식.test(문자열)`              | 일치 여부(Boolean) 반환          |
| match   | `문자열.match(정규식)`             | 일치하는 문자의 배열(Array) 반환 |
| replace | `문자열.replace(정규식, 대체문자)` | 일치하는 문자를 대체             |

```js
const regexp = /fox/gi;

console.log(regexp.test(str)); // true
console.log(str.match(regexp)); // ['fox']
console.log(str.replace(regexp, "cat")); // 'The quick brown cat ...'
```

## 플래그(옵션)

| 플래그 | 설명                                                      |
| ------ | --------------------------------------------------------- |
| g      | 모든 문자 일치(Global)                                    |
| i      | 영어 대소문자를 구분 않고 일치(Ignore case)               |
| m      | 여러 줄 일치(Multi line), 각각의 줄을 시작과 끝으로 인식! |

```js
console.log(str.match(/the/)); // ['the', index: 19, ...]
console.log(str.match(/the/g)); // ['the', 'the']
console.log(str.match(/the/gi)); // ['the', 'The', 'the']
console.log(str.match(/\.$/gi)); // null
console.log(str.match(/\.$/gim)); // ['.']
```

## 패턴(표현)

| 패턴       | 설명                                                 |
| ---------- | ---------------------------------------------------- |
| ^ab        | 줄(Line) 시작에 있는 ab와 일치                       |
| ab$        | 줄(Line) 끝에 있는 ab와 일치                         |
| .          | 임의의 한 문자와 일치                                |
| a&verbar;b | a 또는 b와 일치                                      |
| ab?        | b가 없거나 b와 일치                                  |
| {3}        | 3개 연속 일치                                        |
| {3,}       | 3개 이상 연속 일치                                   |
| {3,5}      | 3개 이상 5개 이하(3~5개) 연속 일치                   |
| +          | 1회 이상 연속 일치, `{1,}`                           |
| \*         | 0회 이상 연속 일치, `{0,}`                           |
| ()         | 그룹핑                                               |
| [ab]       | a 또는 b                                             |
| [a-z]      | a부터 z 사이의 문자 구간에 일치(영어 소문자)         |
| [A-Z]      | A부터 Z 사이의 문자 구간에 일치(영어 대문자)         |
| [0-9]      | 0부터 9 사이의 문자 구간에 일치(숫자)                |
| [가-힣]    | 가부터 힣 사이의 문자 구간에 일치(한글)              |
| \w         | 63개 문자(Word, 대소영문52개 + 숫자10개 + \_)에 일치 |
| \b         | 63개 문자에 일치하지 않는 문자 경계(Boundary)        |
| \d         | 숫자(Digit)에 일치                                   |
| \s         | 공백(Space, Tab 등)에 일치                           |
| (?:)       | 그룹 지정                                            |
| (?=)       | 앞쪽 일치(Lookahead)                                 |
| (?<=)      | 뒤쪽 일치(Lookbehind)                                |

```js
console.log(str.match(/^h.../gm));
console.log(str.match(/...\.com$/gm));
console.log(str.match(/fox|dog/g)); // ['fox', 'dog']
console.log(str.match(/https?/g)); // ['http', 'https']

console.log(str.match(/\d{3}/g));
console.log(str.match(/\d{3,}/g));
console.log(str.match(/\d{1,}/g));
console.log(str.match(/\d+/g));

console.log(str.match(/[가-힣]+/g)); // ['동해물과', '백두산이', '마르고', '닳도록']
console.log(str.match(/\d+/g)); // ['010', '1234', '5678', '7035', '60', '1234']
console.log(str.match(/\b\d+\b/g)); // ['010', '1234', '5678', '1234']
console.log(str.match(/\s/g));

console.log(str.match(/https?:\/\/(?:\w+\.?)+\/?/g)); // ['https://www.omdbapi.com/', 'http://localhost']
console.log(str.match(/.+(?=과)/g)); // 동해물
console.log(str.match(/.+(?=@)/g)); // ['thesecon', 'hello']
console.log(str.match(/(?<=@).+/g)); // ['gmail.com', 'naver.com']

console.log(str.match(/\w+@\w+\.\w+/g)); // ['thesecon@gmail.com', 'hello@naver.com']
console.log(str.match(/\d{3}-\d{4}-\d{4}/g)); // ['010-1234-5678']
```
