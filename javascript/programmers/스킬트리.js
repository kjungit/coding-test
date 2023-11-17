function solution(total_sp, skills) {
  let N = skills.length + 1;
  let graph = Array.from({ length: N + 1 }, () => []);
  let indegree = Array(N + 1).fill(0);
  let points = Array(N + 1).fill(0);
  let queue = [];

  for (let [u, v] of skills) {
    graph[v].push(u);
    console.log(graph);
    indegree[u]++;
  }

  for (let i = 1; i <= N; i++) {
    if (indegree[i] === 0) {
      queue.push(i);
      points[i] = 1;
    }
  }

  while (queue.length > 0) {
    const current = queue.shift();

    for (let next of graph[current]) {
      points[next] += points[current];
      if (--indegree[next] === 0) queue.push(next);
    }
  }

  const totalPoints = points.reduce((acc, cur) => acc + cur);

  for (let i = 1; i <= N; i++) {
    points[i] *= total_sp / totalPoints;
  }

  return points.slice(1);
}

let total_sp = 121;
let skills = [
  [1, 2],
  [1, 3],
  [3, 6],
  [3, 4],
  [3, 5],
];
console.log(solution(total_sp, skills));
