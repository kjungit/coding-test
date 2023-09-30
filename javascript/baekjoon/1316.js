const input = [2, "zxzxz", "xyxyx"];

// const length = Number(input[0]);
// let count = 0;

// for (let i = 1; i <= length; i++) {
//   // 제공되는 단어 수만큼 순회
//   let str = input[i].split(""); // 단어 하나씩 배열
//   let test = []; // 빈배열

//   for (let j = 0; j < str.length; j++) {
//     // 단어의 길이만큼 순회
//     if (!test.includes(str[j]) || str[j] === str[j - 1]) {
//       // test배열에 str의 단어들이 포함되어 있지 않거나 str의 현재값, 이전값이 같다면 test에 push
//       test.push(str[j]);
//     }
//   }

//   if (test.length === str.length) {
//     // test의 길이와 문자의 길이가 같다면 그룹문자이므로 count
//     count++;
//   }
// } // test에 문자가 안들어가는건 연속해서 나오는문자가 아니거나 test에 포함되어있다면 그룹문자가 아니다.

const length = Number(input[0]);

const count = input.slice(1, length + 1).filter((word) => {
  const str = word.split("");
  const test = str.filter(
    (char, index) =>
      !str.slice(0, index).includes(char) || char === str[index - 1]
  );
  return test.length === str.length;
}).length;
console.log(count);
