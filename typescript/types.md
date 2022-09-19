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
