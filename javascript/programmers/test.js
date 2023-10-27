function calculateArea(points) {
  points.sort((a, b) => a[0] - b[0]); // X 좌표를 기준으로 정렬
  let totalArea = 0;

  for (let i = 1; i < points.length; i++) {
    const x1 = points[i - 1][0];
    const y1 = points[i - 1][1];
    const x2 = points[i][0];
    const y2 = points[i][1];

    totalArea += ((x2 - x1) * (y1 + y2)) / 2;
  }

  return totalArea;
}

// 입력 처리
const input = [
  [6, 3],
  [5, 2],
  [3, 1],
  [8, 1],
  [5, 4],
  [1, 1],
  [8, 3],
  [6, 1],
  [4, 2],
  [3, 3],
  [6, 5],
  [1, 2],
  [8, 2],
];

const N = input.length;
const area = calculateArea(input);

console.log(area);
