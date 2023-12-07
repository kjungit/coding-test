const input = `6
(())())
(((()())()
(()())((()))
((()()(()))(((())))()
()()()()(()()())()
(()((())()(`.split("\n");

for (let i = 1; i <= input[0]; i++) {
  let bracket = input[i].split("");
  const ex = [];
  let isVPS = true;

  for (let j = 0; j < bracket.length; j++) {
    if (bracket[j] === "(") {
      ex.push("(");
    } else if (bracket[j] === ")") {
      if (ex.length === 0) {
        isVPS = false;
        break;
      }
      ex.pop();
    }
  }

  if (ex.length !== 0 || !isVPS) console.log("NO");
  else console.log("YES");
}
