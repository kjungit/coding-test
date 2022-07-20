# 클래스

## prototype

`array mdn` 구글 검색!

```js
const fruits = new Array("Apple", "Banana", "Cherry");
// const fruits = ['Apple', 'Banana', 'Cherry']

console.log(fruits);
console.log(fruits.length); // 3
console.log(fruits.includes("Banana")); // true
console.log(fruits.includes("Orange")); // false

Array.prototype.heropy = function () {
  console.log(this);
  return this.map((item) => item[0]);
};

const newF = fruits.heropy();
console.log(newF);
```

```js
const heropy = {
  firstName: "Heropy",
  lastName: "Park",
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};
const neo = {
  firstName: "Neo",
  lastName: "Anderson",
};
console.log(heropy.getFullName());
console.log(heropy.getFullName.call(neo));
```

```js
function User(first, last) {
  this.firstName = first;
  this.lastName = last;
}
User.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

const heropy = new User("Heropy", "Park");
const neo = new User("Neo", "Anderson");

console.log(heropy); // User {}
console.log(neo); // User {}
console.log(heropy.getFullName === neo.getFullName); // true
```

# 클래스

## prototype

`array mdn` 구글 검색!

```js
const fruits = new Array("Apple", "Banana", "Cherry");
// const fruits = ['Apple', 'Banana', 'Cherry']

console.log(fruits);
console.log(fruits.length); // 3
console.log(fruits.includes("Banana")); // true
console.log(fruits.includes("Orange")); // false

Array.prototype.heropy = function () {
  console.log(this);
  return this.map((item) => item[0]);
};

const newF = fruits.heropy();
console.log(newF);
```

```js
const heropy = {
  firstName: "Heropy",
  lastName: "Park",
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};
const neo = {
  firstName: "Neo",
  lastName: "Anderson",
};
console.log(heropy.getFullName());
console.log(heropy.getFullName.call(neo));
```

```js
function User(first, last) {
  this.firstName = first;
  this.lastName = last;
}
User.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

const heropy = new User("Heropy", "Park");
const neo = new User("Neo", "Anderson");

console.log(heropy); // User {}
console.log(neo); // User {}
console.log(heropy.getFullName === neo.getFullName); // true
```

## ES6 Classes

```js
class User {
  constructor(first, last) {
    this.firstName = first;
    this.lastName = last;
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const heropy = new User("Heropy", "Park");
const neo = new User("Neo", "Anderson");

console.log(heropy.getFullName()); // Heropy Park
console.log(neo.getFullName()); // Neo Anderson
console.log(heropy.getFullName === neo.getFullName); // true
```

### 화살표 함수 메소드

```js
class User {
  constructor(first, last) {
    this.firstName = first;
    this.lastName = last;
  }
  getFullName = () => {
    return `${this.firstName} ${this.lastName}`;
  };
}

const heropy = new User("Heropy", "Park");
const neo = new User("Neo", "Anderson");

console.log(heropy.getFullName()); // Heropy Park
console.log(neo.getFullName()); // Neo Anderson
console.log(heropy.getFullName === neo.getFullName); // false
```

## Getter, Setter

```js
class User {
  constructor(first, last) {
    this.firstName = first;
    this.lastName = last;
  }
  // Getter
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  // Setter
  set fullName(value) {
    [this.firstName, this.lastName] = value.split(" ");
  }
}
```
