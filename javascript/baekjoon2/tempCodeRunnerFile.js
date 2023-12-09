for (let i = 1; i <= input[0]; i++) {
  let bracket = input[i].split("");
  const ex = [];
  for (let j = 0; j < bracket.length; j++) {
    if (bracket[j] === "(") ex.push("(");
    else if (bracket[j] === ")" && ex.length !== 0) ex.pop();
    else ex.push(")");
  }

  if (ex.length === 0) console.log("YES");
  else console.log("NO");
}
