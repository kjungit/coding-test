## 타입 지정

```typescript
let num: number = 12;

function sum(a: number, b: number): number {
  return a + b;
}
const res: number = sum(1, 2);

console.log(num, res);
```

## 타입 에러

일치하지 않는 타입을 지정하면, 코드를 작성하는 시점에서 에러가 발생합니다.

```typescript
function sum(a: number, b: number): number {
  return a + b;
}
const res: string = sum(1, 2); // TypeError!
```

## 타입 선언

### String

문자열을 나타냅니다.

```typescript
let red: string = "Red";
let green: string = "Green";
let myColor: string = `My color is ${red}.`;
let yourColor: string = "Your color is" + green;
```

### Number

모든 부동 소수점 값을 사용할 수 있습니다.

```typescript
let integer: number = 6;
let float: number = 3.14;
let hex: number = 0xf00d; // 61453
let binary: number = 0b1010; // 10
let octal: number = 0o744; // 484
let infinity: number = Infinity;
let nan: number = NaN;
```

### Boolean

`true` | `false` 값을 나타냅니다.

```typescript
let isBoolean: boolean;
let isDone: boolean = false;
```

### Null, Undefined

`null`과 `undefined`는 모든 타입의 하위 타입이지만, 엄격한 타입스크립트 문법에서 직접 할당은 가능하지 않습니다.  
그러나 `void`에는 `undefined`를 할당할 수 있습니다.

```typescript
let str: string = null; // Error!
let num: number = undefined; // Error!
let boo: boolean = null; // Error!
let arr: number[] = undefined; // Error!
let obj: object = null; // Error!
let voi1: void = null; // Error!
let voi2: void = undefined; // OK!
```

변수를 초기화하지 않으면, `undefined`가 되기 때문에 초기화 후 사용해야 합니다.

```typescript
let str: string;
let num: number;
console.log(str); // Error! - 변수가 할당되기 전에 사용되었습니다.(2454)
console.log(num); // Error! - 변수가 할당되기 전에 사용되었습니다.(2454)
```

```ts
let str: string = "";
let num: number = 0;
console.log(str); // OK!
console.log(num); // OK!
```

### Array

일반 배열을 나타냅니다.  
배열은 두 가지 방법으로 타입을 선언할 수 있습니다.

```typescript
const fruits: string[] = ["Apple", "Banana", "Cherry"];
const numbers: number[] = [1, 2, 3, 4, 5, 6, 7];
```

```typescript
// 문자열만 가지는 배열
const fruits: string[] = ["Apple", "Banana", "Mango"];
// Or
const fruits: Array<string> = ["Apple", "Banana", "Mango"];

// 숫자만 가지는 배열
const oneToSeven: number[] = [1, 2, 3, 4, 5, 6, 7];
// Or
const oneToSeven: Array<number> = [1, 2, 3, 4, 5, 6, 7];
```

유니언 타입(다중 타입)의 '문자열과 숫자를 동시에 가지는 배열'도 선언할 수 있습니다.

```typescript
const array: (string | number)[] = ["Apple", 1, 2, "Banana", "Mango", 3];
// Or
const array: Array<string | number> = ["Apple", 1, 2, "Banana", "Mango", 3];
```

인터페이스(Interface)나 커스텀 타입(Type)을 사용할 수도 있습니다.

```typescript
interface User {
  name: string;
  age: number;
  isValid: boolean;
}
let userArr: User[] = [
  {
    name: "Neo",
    age: 85,
    isValid: true,
  },
  {
    name: "Lewis",
    age: 52,
    isValid: false,
  },
  {
    name: "Evan",
    age: 36,
    isValid: true,
  },
];
```

다음과 같이 특정한 값으로 타입을 대신할 수도 있습니다.

```typescript
let array: 10[];
array = [10];
array.push(10); // OK!
array.push(11); // Error!
```

### Tuple

튜플 타입은 배열과 매우 유사합니다.  
튜플은 <strong>정해진 타입의 고정된 길이(length) 배열</strong>을 표현합니다.

```typescript
let tuple: [string, number];
tuple = ["a", 1];
tuple = ["a", 1, 2]; // Error!
tuple = [1, "a"]; // Error!
```

다음과 같이 데이터를 개별 변수로 지정하지 않고, 단일 튜플 타입으로 지정해 사용할 수 있습니다.

```typescript
// Variables
let userId: number = 1234;
let userName: string = "HEROPY";
let isValid: boolean = true;

// Tuple
let user: [number, string, boolean] = [1234, "HEROPY", true];
console.log(user[0]); // 1234
console.log(user[1]); // 'HEROPY'
console.log(user[2]); // true
```

나아가 위 방식을 활용해 다음과 같은 튜플 타입의 배열(2차원 배열)을 사용할 수 있습니다.

```typescript
let users: [number, string, boolean][];
// Or
// let users: Array<[number, string, boolean]>

users = [
  [1, "Neo", true],
  [2, "Evan", false],
  [3, "Lewis", true],
];
```

튜플은 <strong>정해진 타입의 고정된 길이 배열</strong>을 표현하지만, 이는 할당(Assign)에 국한됩니다.  
`.push()`나 `.splice()` 등을 통해 값을 넣는 행위는 막을 수 없습니다.

```typescript
let tuple: [string, number];
tuple = ["a", 1];
tuple = ["b", 2];
tuple.push(3);
console.log(tuple); // ['b', 2, 3]
tuple.push(true); // Error - TS2345: Argument of type 'true' is not assignable to parameter of type 'string | number'.
```

### Any

Any는 모든 타입을 의미합니다.  
따라서 일반적인 자바스크립트 변수와 동일하게 어떤 타입의 값도 할당할 수 있습니다.  
외부 자원을 활용해 개발할 때 불가피하게 타입을 단언할 수 없는 경우 유용할 수 있지만, 되도록 사용하지 않는 것이 좋습니다.

```typescript
let any: any = 123;
any = "Hello world";
any = {};
any = null;
```

### Unknown

Unknown은 '알 수 없는 타입'을 의미합니다.  
Any와 같이 Unknown에는 어떤 타입의 값도 할당할 수 있지만, Unknown을 다른 타입에는 할당할 수 없습니다.

```typescript
let a: any = 123;
let u: unknown = 123;

const boo1: boolean = a; // 모든 타입(any)은 어디든 할당할 수 있습니다.
const any1: any = u; // OK!
const num1: number = u; // Error! - unknown은 any를 제외한 다른 타입에 할당할 수 없습니다.
const num2: number = u as number; // 타입을 단언하면 할당할 수 있습니다.
```

### Object

기본적으로 `typeof` 연산자가 `"object"`로 반환하는 모든 타입을 나타냅니다.

> 엄격한 타입 검사(`strict: true`)에서는 `null`을 포함하지 않습니다.

```typescript
let obj: object = {};
let arr: object = [];
let func: object = function () {};
let date: object = new Date();
// ...
```

보다 정확한 타입 지정을 위해 다음과 같이 객체 속성(Properties)들에 대한 타입을 개별적으로 지정할 수 있습니다.

```typescript
let userA: { name: string; age: number } = {
  name: "HEROPY",
  age: 123,
};

let userB: { name: string; age: number } = {
  name: "HEROPY",
  age: false, // Error
  email: "thesecon@gmail.com", // Error
};
```

타입 재사용하기 위해, `interface`나 `type`을 사용하는 것도 좋습니다.

```typescript
interface User {
  name: string;
  age: number;
}

const userA: User = {
  name: "HEROPY",
  age: 123,
};

const userB: User = {
  name: "HEROPY",
  age: false, // Error
  email: "thesecon@gmail.com", // Error
};
```

### Void

Void는 값을 반환하지 않는 함수에서 사용합니다.

```typescript
function hello(msg: string): void {
  console.log(`Hello ${msg}`);
}
```

```typescript
// Error! - 선언된 타입이 'void' 혹은 'any'가 아닌 함수는 return 문을 포함해야 합니다.(2355)
function hello(msg: string): undefined {
  console.log(`Hello ${msg}`);
}
```

### Never

Never은 <strong>절대 발생하지 않을 값</strong>을 나타내며, 어떠한 타입도 적용할 수 없습니다.

```typescript
function error(message: string): never {
  throw `Error! - ${message}`;
}
```

보통 다음과 같이 빈 배열을 타입으로 잘못 선언한 경우, Never를 확인할 수 있습니다.

```typescript
const never: [] = [];
never.push(3); // Error! - 숫자 '3'은 'never' 타입의 매개변수에 할당할 수 없습니다.(2345)
```

### 유니언(Union)

2개 이상의 타입을 허용하는 경우, 이를 유니언(Union)이라고 합니다.  
`|`(vertical bar)를 통해 타입을 구분하며, `()`는 선택적으로 사용할 수 입니다.

```typescript
let union: string | number;
union = "Hello type!";
union = 123;
union = false; // Error - TS2322: Type 'false' is not assignable to type 'string | number'.
```

### 인터섹션(Intersection)

`&`(ampersand)를 사용해 2개 이상의 타입을 조합하는 경우, 이를 인터섹션(Intersection)이라고 합니다.  
인터섹션은 새로운 타입을 생성하지 않고 기존의 타입들을 조합할 수 있기 때문에 유용합니다.

> 위에서 살펴본 유니언을 마치 '또는(Or)'과 같이 이해할 수 있다면, 인터섹션은 '그리고(And)'와 같이 이해할 수 있습니다.

```typescript
// 기존 타입들이 조합 가능하다면 인터섹션을 활용할 수 있습니다.
interface IUser {
  name: string;
  age: number;
}
interface IValidation {
  isValid: boolean;
}
const heropy: IUser = {
  name: "Heropy",
  age: 36,
  isValid: true, // Error -  TS2322: Type '{ name: string age: number isValid: boolean }' is not assignable to type 'IUser'.
};
const neo: IUser & IValidation = {
  name: "Neo",
  age: 85,
  isValid: true,
};

// 기존 타입(IUser, IValidation)과 비슷하지만, 정확히 일치하는 타입이 없다면 새로운 타입을 생성해야 합니다.
interface IUserNew {
  name: string;
  age: string;
  isValid: string;
}
const evan: IUserNew = {
  name: "Evan",
  age: "36",
  isValid: "Yes!",
};
```

### 함수(Function)

화살표 함수를 이용해 타입을 지정할 수 있습니다.  
인수의 타입과 반환 값의 타입을 입력합니다.

```typescript
// myFunc는 2개의 숫자 타입 인수를 가지고, 숫자 타입을 반환하는 함수.
let myFunc: (arg1: number, arg2: number) => number;
myFunc = function (x, y) {
  return x + y;
};

// 인수가 없고, 반환도 없는 경우.
let yourFunc: () => void;
yourFunc = function () {
  console.log("Hello world~");
};
```

혹은 인터페이스로 함수 타입을 지정할 수 있습니다.

```typescript
interface MyFunc {
  (x: number, y: number): number;
}

const myFunc: MyFunc = function (x, y) {
  return x + y;
};
```

다음 예제를 가볍게 읽어보세요.

```ts
/// 문자
let str: string;
let red: string = "Red";
let green: string = "Green";
let myColor: string = `My color is ${red}.`;
let yourColor: string = "Your color is" + green;

/// 숫자
let num: number;
let integer: number = 6;
let float: number = 3.14;
let infinity: number = Infinity;
let nan: number = NaN;

/// 불린
let isBoolean: boolean;
let isDone: boolean = false;

/// Null / Undefined
let nul: null;
let und: undefined;
nul = null;
let num: number;
num = 123;
console.log(nul);
console.log(und);
console.log(num);

/// 배열
const fruits: string[] = ["Apple", "Banana", "Cherry"];
const numbers: number[] = [1, 2, 3, 4, 5, 6, 7];
const union: (string | number)[] = ["Apple", 1, 2, "Banana", 3];
const array: number[] = [1, 2, 3];

/// 객체
// typeof DATA === 'object'
const obj: object = {};
const arr: object = [];
const func: object = function () {};

interface User {
  name: string;
  age: number;
  isValid: boolean;
}
const userA: User = {
  name: "Heropy",
  age: 85,
  isValid: true,
};
const userB: User = {
  name: "Neo",
  age: 22,
  isValid: false,
};

/// 함수
const add: (x: number, y: number) => number = function (x, y) {
  return x + y;
};
const a: number = add(1, 2);

const hello: () => void = function () {
  console.log("Hello world~");
};
const h: void = hello();

/// Any
let hello: any = "Hello world";
hello = 123;
hello = false;
hello = null;
hello = {};
hello = [];
hello = function () {};

/// Unknown
const a: any = 123;
const u: unknown = 123;

const any: any = a;
const boo: boolean = a;
const num: number = a;
const arr: string[] = a;
const obj: { x: string; y: number } = a;
// const any: any = u
// const boo: boolean = u
// const num: number = u
// const arr: string[] = u
// const obj: { x: string, y: number } = u

/// Tuple
const tuple: [string, number, boolean] = ["a", 1, false];
const users: [number, string, boolean][] = [
  [1, "Neo", true],
  [2, "Evan", false],
  [3, "Lewis", true],
];

/// Void
function hello(msg: string): void {
  console.log(`Hello ${msg}`);
}
const hi: void = hello("world");

/// Never
const nev: [] = [];
nev.push(3);

/// Union
let union: string | number;
union = "Hello type!";
union = 123;
union = false;

/// Intersection
interface User {
  name: string;
  age: number;
}
interface Validation {
  isValid: boolean;
}
const heropy: User & Validation = {
  name: "Neo",
  age: 85,
  isValid: true,
};
```
