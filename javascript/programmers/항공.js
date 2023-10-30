function solution(n, route) {
  const INF = 1e9;
  let dist = Array(n + 1).fill(INF);
  let graph = Array.from(Array(n + 1), () => new Array());

  for (let i = 0; i < route.length; i++) {
    let a = route[i][0];
    let b = route[i][1];
    let c = route[i][2];

    graph[a].push([b, c]);
    graph[b].push([a, c]);
  }

  dist[1] = 0;

  let pq = [[dist[1], 1]];

  while (pq.length > 0) {
    pq.sort((a, b) => b[0] - a[0]);
    const [fuel, now] = pq.pop();

    if (dist[now] < fuel) continue;

    for (let i = 0; i < graph[now].length; i++) {
      const nextNode = graph[now][i][0];
      const nextWeight = Math.max(fuel, graph[now][i][1]);

      if (nextWeight < dist[nextNode]) {
        dist[nextNode] = nextWeight;
        pq.push([nextWeight, nextNode]);
      }
    }
  }

  return dist[n];
}

let n = 3;
let route = [
  [1, 2, 1],
  [1, 3, 4],
  [2, 3, 2],
];

console.log(solution(n, route));
