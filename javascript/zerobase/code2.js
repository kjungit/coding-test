// 원형 연결리스트 알고리즘 문제 풀이
/**
 * 문제 설명

입력값 8, 2, 3

출력 값 2, 5, 8, 4, 1, 7, 3, 6 

 

- n = 8, m = 2, k = 3

- 1, 2, 3, 4, 5, 6, 7, 8 로 n의 사람이 있을 때 m = 2번부터 시작하여 k = 3번의 간격으로 이동해서 나오는 숫자들을 출력 해야한다.
 */

/* user code */
function Node(data) {
  this.data = data;
  this.next = null;
}

function LinkedList() {
  this.head = null;
}

function answer(n, m, k) {
  let result = [];

  // 1. Circular Linked List 만들기
  let ll = new LinkedList();
  let current, prev;

  for (let i = 1; i <= n; i++) {
    // n만큼 for문을 돌면서 currnet에 node를 넣어준다.
    current = new Node(i);
    if (i === 1) {
      ll.head = current;
    } else {
      prev.next = current;
    }
    prev = current;
  }
  current.next = ll.head; // 마지막 node를 첫 heal와 연결해주어 원형 연결리스트를 완성한다.

  // 2. Start node 위치 설정
  current = ll.head; // current에 첫 head로 시작
  while (--m) {
    // m - 1회 만큼 반복하면 시작하는 node에 맞게 이동한다.
    prev = current;
    current = current.next;
  }

  // 3. k만큼 움직이면서 제거 / 한개만 남을 때까지
  let count; // k를 증감을 하게 되면 k값이 사라지기 때문에 k값을 가지고 있을 변수를 설정

  while (current.next !== current) {
    // current값을 만날 때까지 반복
    result.push(current.data); // current값을 하나씩 result에 추가한다.
    prev.next = current.next; // 이전 node의 Next를 현재 node의 Next로 연결한다.
    // result에 추가한 node를 제외하고 원형연결리스트를 그대로 유지한다.
    count = k;
    while (count--) {
      // count값 만큼 계속해서 이동한다.
      prev = current;
      current = current.next;
    }
  }

  // 4. 혼자 남은 후보 번호를 result에 추가
  result.push(current.data);

  return result;
}
