function solution(n) {
  let res = 0;
  function countFunc(n) {
    let count = 0;
    while (n) {
      count += n & 1;
      n >>= 1;
    }

    return count;
  }

  let base = countFunc(n);
  for (let i = 1; i < n; i++) {
    let binaryNumber = countFunc(i);
    if (binaryNumber === base) {
      res++;
    }
  }
  return res;
}

solution(9);
