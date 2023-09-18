const length = 3;

result = "";

for (let i = 0; i < length; i++) {
  for (let j = 0; j <= length - i - 2; j++) {
    result += " ";
  }
  for (let j = 0; j <= i; j++) {
    result += "*";
  }
  result += "\n";
}

console.log(result);
