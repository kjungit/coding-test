// 연결리스트 역순 출력, 반대로 연결 이해하기, 자바스크립

/**
 * 문제는 간단하다

head → 1 → 2 → 3 → null
이렇게 node가 연결되어 있는 연결리스트를
head → 3 → 2 → 1 → null
역순! 반대로 출력하게 수정해야한다.
연결리스트에 대해서 이해가 되어야지만 풀 수 있는 문제였다.
이 문제를 이해하는데 하루가 넘게 걸렸다... 하...
그만큼 성취감은 두배였지만... 제발 바로 이해해줘 내 머리야..
우선 코드부터 보면서 설명을 해야할거 같다.
 */
function answer(ll) {
  let current = ll.head,
    prev = null,
    next;
  while (current !== null) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  ll.head = prev;

  return ll;
}
