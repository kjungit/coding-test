// 알고리즘 문제 오답풀이_1

/**
 * keys

닫기
문제 설명

열쇠와 문은 알파벳으로 이루어져있다.
예를 들어 열쇠의 획득 순서는 "bgr", 앞에 놓인 문들은 "RGB"라고 했을 때
r열쇠와 R문이 매칭된다.
g열쇠와 G문이 매칭되고 마지막으로 b문과 B문을 매칭하여 탈출할 수 있다.
이 때, 던전을 탈출할 수 있다면 YES, 탈출할 수 없다면 NO를 출력한다.

테스트 케이스
keys = "rgb"
doors = "RGB"
출력값 NO
- 이 문제는 스택문제였다. 그냥 순서대로 대문자 또는 소문자로 바꾸기만 하면 될 줄 알았다.

- 예를 보게 되면 keys의 첫 문자와 doors의 끝문자가 맞으면 통과되는걸 볼 수 있다.
 */
function solution(keys, doors) {
  keys = keys.split("");
  doors = doors.split("");

  while (keys.length) {
    if (keys.pop().toUpperCase() !== doors.shift()) {
      return "NO";
    }
  }

  return "YES";
}

function solution(keys, doors) {
  keys = keys.split("");
  doors = doors.split("").reverse();

  for (let i = 0; i < keys.length; i++) {
    if (keys[i].toUpperCase() !== doors[i]) {
      return "NO";
    }
  }

  return "YES";
}
