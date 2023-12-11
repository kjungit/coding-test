const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
var groupAnagrams = function (strs) {
  const res = {};

  for (const el of strs) {
    for (const el of strs) {
      const item = el.split("").sort().join("");

      if (!(item in res)) {
        res[item] = [];
        res[item].push(el);
      } else {
        res[item].push(el);
      }
      console.log(res);
    }
    console.log(Object.values(res).reverse());
    return Object.values(res);
  }
};

groupAnagrams(strs);
