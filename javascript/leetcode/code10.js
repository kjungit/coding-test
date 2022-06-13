// LeetCode 11. Container With Most Water 자바스크립트 문제 풀이
/**
 *  

height길이 의 정수 배열이 제공 됩니다 n. 선의 두 끝점이 및 가 되도록 n수직선이 그려집니다.

ith(i, 0)(i, height[i])

컨테이너에 가장 많은 물이 포함되도록 x축과 함께 컨테이너를 형성하는 두 개의 선을 찾으십시오.

컨테이너가 저장할 수 있는 최대 물의 양을 반환 합니다 .
 */
var maxArea = function (height) {
  let left = 0; // 첫 index
  let right = height.length - 1; // 끝 index
  let maxSize = 0; // 가장 큰 값을 저장할 변수

  while (left < right) {
    // 첫 index가 끝 index보다 클때까지 순회
    const heightLeft = height[left],
      heightRight = height[right]; // 두 변수에 배열의 요소를 할당
    const width = right - left; // 넓이 구하기 (index 끝 값 - index 첫 값)
    const size = width * Math.min(heightLeft, heightRight); // 넓이 * 두 요소 중 낮은 값
    maxSize = Math.max(maxSize, size); // maxSize에는 큰 값들을 계속 업데이트 시킨다.

    if (heightLeft <= heightRight) {
      // 첫 요소 값이 끝 요소 값보다 작거나 같으면 증가, 증감 시킨다.
      left++;
    } else {
      right--;
    }
  }
  return maxSize;
};
