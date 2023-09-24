const input = [0, 1, 2, 2, 2, 7];

const chess = [1, 1, 2, 2, 2, 8];
const res = chess.map((i, index) => i - input[index]);

console.log(res.join(" "));
