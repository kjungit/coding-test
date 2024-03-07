function solution(answers) {
  const answer = [];
  const first_num = [1, 2, 3, 4, 5];
  const second_num = [2, 1, 2, 3, 2, 4, 2, 5];
  const third_num = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];


  const correctCount = [0, 0, 0];

  for (let i = 0, len = answers.length; i < len; i++) {
    if (answers[i] === first_num[i % first_num.length]) correctCount[0] += 1;
    if (answers[i] === second_num[i % second_num.length]) correctCount[1] += 1;
    if (answers[i] === third_num[i % third_num.length]) correctCount[2] += 1;
  }

  const maxScore = Math.max(...correctCount);
  correctCount.forEach((value, index) => {
    if (value === maxScore) answer.push(index + 1);
  });


  return answer;
}