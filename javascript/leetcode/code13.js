class Heap {
  constructor(size) {
    this.size = size;
    this.heap = new Array(size).fill(0);
    this.count = 0;
  }

  push(data) {
    // 1번 INDEX 데이터 추가
    this.heap[++this.count] = data;

    // 자식과 부모에 대해 설정
    let current = this.count;
    let parent = Math.floor(current / 2);

    /**
     * 자식 노드 / 2 === 부모노드
     * 현재 노드 * 2 === 왼쪽 자식 노드
     * 현재 노드 * 2 + 1 === 오른쪽 자식 노드
     */

    // 현재 위치보다 부모가 더 작은 값이면 -> 최대 힙의 정의에 따라 SWAP
    // 늘 최대 힙은 서브트리에서 부모가 자식노드보다 크거나 같아야한다.
    while (current > 1 && this.heap[current] > this.heap[parent]) {
      [this.heap[current], this.heap[parent]] = [
        this.heap[parent],
        this.heap[current],
      ];
      current = parent;
      console.log(Math.floor(current / 2));
      parent = Math.floor(current / 2);
    }
  }

  pop() {
    // 만약 값이 없다면 null
    if (this.count === 0) {
      return null;
    }

    // 첫번째 값이 최대 값
    const data = this.heap[1];

    // 힙의 가장 마지막 값을 루트로 가져옴
    this.heap[1] = this.heap[this.count--];

    let current = 1;
    let child;

    while (1) {
      child = current * 2;

      // 현재 자식중 더 큰값으로 이동
      if (child < this.count && this.heap[child] < this.heap[child + 1]) {
        child++;
      }

      // SWAP 멈춤 => 자식노드가 마지막까지 왔을때, 부모노드(현재노드)가 자식보다 큰 경우
      if (child > this.count || this.heap[current] > this.heap[child]) break;

      [this.heap[current], this.heap[child]] = [
        this.heap[child],
        this.heap[current],
      ];

      current = child;
    }
    return data;
  }
}
const nums = [3, 2, 3, 1, 2, 4, 5, 5, 6];
const k = 4;
const maxHeap = new Heap(k);

for (let i = 0; i < nums.length; i++) {
  maxHeap.push(nums[i]);
}

let res;

for (let i = 0; i < k; i++) {
  res = maxHeap.pop();
}

console.log(res);
