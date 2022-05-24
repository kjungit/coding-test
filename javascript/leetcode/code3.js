// LeetCode 26. Remove Duplicates from Sorted Array 배열 문제 풀이
/**
 * 문제 설명

일부 언어에서는 배열의 길이를 변경할 수 없으므로 대신 배열 번호의 첫 번째 부분에 결과를 배치해야 합니다.

더 공식적으로, 중복을 제거한 후 k 요소가 있으면 nums의 처음 k 요소가 최종 결과를 보유해야 합니다.

처음 k개 요소를 넘어 무엇을 남겨두는지는 중요하지 않습니다.

숫자의 처음 k 슬롯에 최종 결과를 배치한 후 k를 반환합니다.

다른 어레이에 추가 공간을 할당하지 마십시오.

O(1) 추가 메모리를 사용하여 제자리에서 입력 배열을 수정하여 이 작업을 수행해야 합니다.

와..문제 이해가 이렇게 어려운건 또 처음인거같다.. easy문제인데 계속 맞게 문제를 풀었는데 테스트가 통과되지 않았다..

내가 문제 이해를 못했구나... 배열을 return하려고 했는데 배열을 return하는게 아니였다... 

간단하게 문제를 설명하면?

주어진 배열에서 중복값을 없앤 길이를 출력하는 되는 문제였다!

그리고 또 하나의 조건은 input배열을 그대로 써야한다. 새로운 배열을 만들면 안되는 문제였다...
 */
let nums = [1, 1, 2];

var removeDuplicates = function (nums) {
  if (nums.length === 0) return 0;
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[k]) {
      console.log(nums);
      k++;
      nums[k] = nums[i];
    }
  }
  return k + 1;
};

console.log(removeDuplicates(nums));
