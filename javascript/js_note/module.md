# 모듈

모듈(Module)은 이해 가능한, 보다 작은 단위로 나눠진 것을 말합니다.  
특히 자바스크립트에서 모듈은 특정 데이터들의 집합(파일)입니다.

## 내보내기(exports)

### 기본 내보내기(Default exports)

- 이름 필요치 않음!
- 모듈당 1번만 사용 가능

### 이름 내보내기(Named exports)

- 이름 필수!
- 모듈당 여러번 사용 가능

모듈은 다음과 같은 내보내기 문법을 사용합니다.  
기본 내보내기와 이름 내보내기를 혼용해서 사용할 수 있습니다.

```js
// 기본 내보내기
export default 데이터;

// 이름 내보내기
export const 이름1 = 데이터1;
export const 이름2 = 데이터2;
/// 혹은,
const 이름1 = 데이터1;
const 이름2 = 데이터2;
export { 이름1, 이름2 };
```

'이름 내보내기'는 다음과 같이 Key-Value 형태로 작성할 수 없습니다.

```js
// 잘못된 사용!
export {
  이름1: 데이터1,
  이름2: 데이터2
}
```

다양한 데이터를 내보낼 수 있습니다.

```js
export default {
  // 객체 데이터
  name: "기본 데이터!",
  desc: "이름 필요 없음!",
};
export const str = "Hello~";
export const num = 123;
export const arr = ["A", "B", "C"];
export function fn() {}
export class Cls {}
```

`as` 키워드로 내보내는 데이터의 이름을 변경할 수 있습니다.

```js
const a = "Named!";
const b = 123;
const c = ["A", "B", "C"];
function d() {}
export { a as str, b as num, c as arr, d as fn };
```

## 가져오기(Imports)

```js
import 기본, { 이름1, 이름2 } from "경로";
```

기본 내보내기와 이름 내보내기 중 원하는 데이터를 가져올 수 있습니다.  
기본 내보내기는 가져올 때 이름을 지정합니다.  
이름 내보내기는 내보내는 이름으로 가져와야 합니다 .

```js
import def from "./myModule.js";
import def, { str, num, arr, hello } from "./myModule.js";
import { str, num, arr, hello } from "./myModule.js";
```

이름 내보내기를 가져올 때, `as` 키워드로 이름을 변경할 수 있습니다.

```js
import {
  str as myStr,
  num as myNum,
  arr as myArr,
  fn as myfn,
} from "./myModule.js";
```

기본 내보내기와 이름 내보내기를 한 번에 원하는 이름으로 지정해 가져올 수 있습니다.

> 와이드카드 문자(`*`, Wildcard character)는 여러 개를 한 번에 지정한다는 의미의 기호입니다.

```js
import * as myName from "./myModule.js";
```
