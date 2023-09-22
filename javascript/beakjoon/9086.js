const input = [3, "ACDKJFOWIEGHE", "O", "AB"];

for (let i = 1; i < input.length; i++) {
  const str = input[i].split(" ").toString();
  console.log(str[0] + str[str.length - 1]);
}

console.log("A".charCodeAt(0));
