const log = (logs = [
  "dig1 8 1 5 1",
  "let1 art can",
  "dig2 3 6",
  "let2 own kit dig",
  "let3 art zero",
]);
var reorderLogFiles = function (logs) {
  const letters = [];
  const digits = [];

  logs.forEach((item) =>
    isNaN(item.split(" ")[1]) ? letters.push(item) : digits.push(item)
  );
  console.log(letters);

  letters.sort((a, b) => {
    const aSubstring = a.split(" ").slice(1).join(" ");
    const bSubstring = b.split(" ").slice(1).join(" ");
    console.log(aSubstring, bSubstring);
    if (aSubstring !== bSubstring) return aSubstring.localeCompare(bSubstring);

    return aSplit[0].localeCompare(bSplit[0]);
  });
  console.log([...letters, ...digits]);
  return [...letters, ...digits];
};
reorderLogFiles(log);
