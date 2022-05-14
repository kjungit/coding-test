// 자바스크립트 연결리스트 열차연결 문제풀이
/**
 * 문제설명

들어오는 입력값을 연결리스트에 node를 추가한다.
입력값

#1 [4, 7, 1, 10, 6]
#2 [3, 10, 6, 9, 11, 3, 4]
#2 [5, 8, 7, 3, 4, 1, 2, 7, 10, 7]

출력 값

#1 4 -> 7 -> 1 -> 10 -> 6 -> null 
#2 3 -> 10 -> 6 -> 9 -> 11 -> 3 -> 4 -> null 
#3 5 -> 8 -> 7 -> 3 -> 4 -> 1 -> 2 -> 7 -> 10 -> 7 -> null

- 연결리스트에 대해서 공부한 후에 연결리스트에 대해서는 이해를 했다고 생각했다.
그러나 문제를 막상 풀려고 하니깐 node, this.head, LinkedList를 어떻게 사용해야할지 감이 잘 잡히질 않았다.
입력값을 순서대로 가지고와야하기 때문에 for를 이용해서 입력값 하나씩을 들고왔다.

문제 풀이 순서
1. Train 객체를 nums 수만큼 만든다.
2. next를 이용해서 열차간 연결을 시킨다.
* 이전 Train 객체.next = 현재 Train 객체 를 연결시켜주어야 한다.
3. 가장 첫번 째 Train 객체는 this. head로 연결 시킨다. 
 
 */
function Train(number) {
  this.number = number;
  this.next = null;
}

function LinkedList() {
  this.head = null;
}
function answer(nums) {
  let ll = new LinkedList();

  let current, prev;
  for (let i = 0; i < nums.length; i++) {
    // for반복문을 통해서 배열을 들고온다.
    current = new Train(nums[i]); // 새로운 노드를 생성하면서 배열을 하나씩 들고와서 current에 할당해준다.

    if (i === 0) {
      // 첫 노드를 ll.head에 넣어준다
      ll.head = current;
    } else {
      // 그 뒤에 오는 node는 prev.next에 넣어준다.
      prev.next = current;
    }

    prev = current; // prev에 current를 넣어주어 .next에는 다른 node들이 연결될 수 있도록 해준다.
  }

  return ll;
}
