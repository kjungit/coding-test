// 알고리즘 문제 오답풀이_1

/**
 * keys

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

/**
 * police

문제 설명
경찰을 1명 뿐이고, 도둑은 k명이 있다.
도둑은 공항에 도착하면 비행기를 타고 도망칠 수 있다.
공항의 위치는 N에 있고 경찰은 현재 0의 위치에 있다.
모든 도둑들은 하나의 직선 상에 존재하고 경찰의 우측과 공항의 좌측편에 위치할 수 있다.
또한 하나의 위치에 여러 도둑이 존재할 수 있다.

1시간이 지날때마다, 도둑과 경찰은 움직이는데 먼저 도둑 한 명이 1시간마다 오른쪽으로 한 칸씩 움직일 수 있다.
만약 도둑이 오른쪽으로 움직였을 때, 그 위치가 공항인 경우에는 도둑은 도망갈 수 있다.
한명의 도둑이 움직이고 나서, 경찰이 움직일 수 있는데 경찰 역시 1시간마다 오른쪽으로 한 칸 씩 움직인다.

이때 경찰의 위치에 있는 도둑은 몇명이든 체포된다. 이 시간들은 경찰이 공항에 도착하면 끝이 나게 되고,

경찰이 공항에 도착할 때까지 최대한으로 도망칠 수 있는 도둑은 몇 명인지 반환하면 된다.

테스트케이스
n = 10
k = 6
theives = [8, 7, 5, 4, 9, 4]
- 문제를 처음 보고 이해가 하나도 안되는 문제... 바로 노트 꺼내서 그림을 그려따.......
- 문제는 간단하게 말하면 0의 위치에서 n의 위치인 공항까지 경찰은 움직인다. 그 사이의 숫자들에 도둑이 있다.
 */
function solution(n, k, theives) {
  let police = 0;
  let answer = 0;
  theives.sort(function (a, b) {
    return b - a;
  });
  for (let i = 0; i < k; i++) {
    if (police >= theives[i]) break;
    police += n - theives[i];
    answer++;
  }

  return answer;
}
