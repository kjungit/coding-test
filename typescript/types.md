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
