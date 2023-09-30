const str = `BruteForce 3.0 F
Greedy 1.0 F
DivideandConquer 2.0 F
DynamicProgramming 3.0 F
DepthFirstSearch 4.0 F
BreadthFirstSearch 3.0 F
ShortestPath 4.0 F
DisjointSet 2.0 F
MinimumSpanningTree 2.0 F
TopologicalSorting 1.0 F
LeastCommonAncestor 2.0 F
SegmentTree 4.0 F
EulerTourTechnique 3.0 F
StronglyConnectedComponent 2.0 F
BipartiteMatching 2.0 F
MaximumFlowProblem 3.0 F
SuffixArray 1.0 F
HeavyLightDecomposition 4.0 F
CentroidDecomposition 3.0 F
SplayTree 1.0 F
`;
const input = str
  .trim()
  .split("\n")
  .map((i) => i.split(" "));
console.log(input);

const score = {
  "A+": 4.5,
  A0: 4.0,
  "B+": 3.5,
  B0: 3.0,
  "C+": 2.5,
  C0: 2.0,
  "D+": 1.5,
  D0: 1.0,
  F: 0.0,
};

const filtering = input.filter((item) => item[2] !== "P");
const total = filtering.reduce((acc, cur) => acc + Number(cur[1]), 0);
const acc = filtering.reduce((acc, cur) => {
  let grade = Number(cur[1]) * Number(score[cur[2]]);
  return grade + acc;
}, 0);

let res = acc / total;
console.log(res.toFixed(6));
