// Leetcode Merge Two Sorted Lists 두 개의 정렬된 목록 병합 문제풀이,
/**
 * 두 개의 정렬된 연결 목록 list1과 list2의 헤드가 제공됩니다.

두 목록을 하나의 정렬된 목록으로 병합합니다.

목록은 처음 두 목록의 노드를 연결하여 만들어야 합니다. 병합된 연결 목록의 헤드를 반환합니다.

 

문제를 풀기 전부터 ListNode로 정렬 된 연결리스트가 있었다.

순차적으로 node를 가지고와서 연결하면 되는 문제였다.

두개의 노드가 있었는데 값을 비교하면서 새로운 노드에 추가해주었다.

다른 풀이를 보고 빠른 답이 있었는데 이해를 하는데에는 이 풀이가 더 나에게 맞는거 같다.
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var mergeTwoLists = function (list1, list2) {
  let list = new ListNode(); // 새로운 ListNode를 만들어준다.
  let head = list; // head에 list를 넣어서 하나씩 연결시켜준다.

  while (list1 !== null && list2 !== null) {
    // list1과 list2가 null이 아닐때까지 순회한다.
    if (list1.val < list2.val) {
      // 만약 list1보다 list2가 크다면?
      list.next = new ListNode(list1.val); // list.next에 list1을 연결해준다.
      list1 = list1.next; // list1을 list1의 next로 초기화 시킨다.
    } else {
      // 그 외의 조건에는?
      list.next = new ListNode(list2.val); // list.next에 list2를 연결시킨다.
      list2 = list2.next; // list2를 list2의 next로 초기화 시킨다.
    }
    list = list.next; // if문이 한번 순회할때마다 list는 list.next로 초기화 시킨다.
  }

  list.next = list1 || list2; // 마지막 남아있는 노드를 list.next로 마지막에 연결해준다.
  return head.next; // head의 next 값을 반환하면 끝!
};
