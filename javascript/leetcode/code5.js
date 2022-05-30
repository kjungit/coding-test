// leetcode 35. Search Insert Position 문제 풀이 자바스크립트
/**
 * 문제 설명

고유한 정수의 정렬된 배열과 대상 값이 주어지면 대상이 발견되면 인덱스를 반환합니다.

그렇지 않은 경우 순서대로 삽입된 경우 인덱스를 반환합니다.

런타임 복잡도가 O(log n)인 알고리즘을 작성해야 합니다.
 */
var searchInsert = function (nums, target) {
  let result = nums.indexOf(target);
  let false_index;
  if (result === -1) {
    nums.push(target);
    false_index = nums.sort((a, b) => a - b).indexOf(target);
    return false_index;
  } else {
    for (let i in nums) {
      if (nums[i] === target) {
        return i;
      }
    }
  }
};
