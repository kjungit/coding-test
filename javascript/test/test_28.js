// 자바스크립트 로마숫자 코딩테스트 문제 풀이 Roman to Integer
/**
 * Roman to Integer 문제 설명
Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
로마 숫자는 I, V, X, L, C, D, M의 7가지 기호로 표시됩니다.

예를 들어, 2는 로마 숫자로 II로 표기되며 두 개만 더하면 됩니다.

12는 단순히 X + II인 XII로 작성됩니다. 숫자 27은 XXVII, 즉 XX + V + II로 표기됩니다.

로마 숫자는 일반적으로 왼쪽에서 오른쪽으로 큰 것에서 작은 것 순으로 표기합니다.

그러나 4에 대한 숫자는 IIII가 아닙니다. 대신 숫자 4는 IV로 기록됩니다.

1은 5보다 앞에 있기 때문에 빼서 4가 됩니다.

IX로 쓰여진 숫자 9에도 동일한 원칙이 적용됩니다.

빼기가 사용되는 6가지 경우가 있습니다.

 

V(5)와 X(10) 앞에 I를 놓아 4와 9를 만들 수 있습니다.
X는 L(50)과 C(100) 앞에 위치하여 40과 90을 만들 수 있습니다.
C는 D(500)와 M(1000) 앞에 위치하여 400과 900을 만들 수 있습니다.
 */

let s = "MCMXCIV";
var romanToInt = function (s) {
  let res = 0;
  let romeNum = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let rome_arr = s.split("");
  let num_arr = rome_arr.map((rome) => romeNum[rome]);

  for (let i = 0; i < num_arr.length; i++) {
    if (num_arr[i] < num_arr[i + 1]) {
      res -= num_arr[i];
    } else {
      res += num_arr[i];
    }
  }
  return res;
};
console.log(romanToInt(s));
/*
뒤의 숫자가 작은 값 : 1000 > 100 = 더할 값 : 1000
첫번째 숫자보다 뒤의 숫자가 큰 값 : 100 < 1000 = 뺄 값 : 100
뒤의 숫자가 작은 값 : 1000 > 10 = 더할 값 : 1000
첫번째 숫자보다 뒤의 숫자가 큰 값 : 10 < 100 = 뺄 값 : 10
뒤의 숫자가 작은 값 : 100 > 1 = 더할 값 : 100
첫번째 숫자보다 뒤의 숫자가 큰 값 : 1 < 5 = 뺄 값 : 1
뒤의 숫자가 작은 값 : 5 > undefined = 더할 값 : 5
정답 : 1994
*/
