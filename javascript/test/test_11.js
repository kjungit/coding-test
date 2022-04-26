// 입력 값 [ 0,1,2,2,2,7 ]
// 필요한 갯수 배열 [ 1, 1, 2, 2, 2, 8 ]
// 출력 값 [ 1, 0, 0, 0, 0, 1 ]
// 필요한 갯수에 모자란 만큼 출력을 해야한다.

// 1. 필요한 갯수 배열을 변수로 만들기

let res = [1, 1, 2, 2, 2, 8];

// 2. 필요한 갯수 배열에서 입력 값을 뺀 값을 출력하기

let count = 0; // 배열끼리 뺀 값을 저장할 변수

for (let i = 0; i < chess.length; i++){
	count = res[i] - chess[i];
	result.push(count);
}


for (let i = 0; i < chess.length; i++){
	result(count++) = res[i] - chess[i];
}
// - 필요한 갯수 배열에서 입력 값을 빼고 출력값에 push를 해준다.

// - count 변수에 담아서 push를 하지 않고 count++을 통해서 바로 넣을 수도 있다.