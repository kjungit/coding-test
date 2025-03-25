function solution(picture, k) {
  const answer = [];

  for (let i = 0; i < picture.length; i++) {
    let zoomedLine = "";

    for (let j = 0; j < picture[i].length; j++) {
      zoomedLine += picture[i][j].repeat(k);
    }

    for (let t = 0; t < k; t++) {
      answer.push(zoomedLine);
    }
  }
  return answer;
}