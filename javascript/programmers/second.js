function solution(a, b) {
  function powerMod(base, exponent, mod) {
    base = BigInt(base);
    exponent = BigInt(exponent);
    mod = BigInt(mod);

    let result = BigInt(1);

    while (exponent > 0n) {
      if (exponent % 2n === 1n) {
        result = (result * base) % mod;
      }
      base = (base * base) % mod;
      exponent /= 2n; // Equivalent to "exponent >>= 1" in some other languages
    }

    return Number(result); // Convert back to a regular number for the final output
  }
  let res = powerMod(a, b, 100000);
  console.log(res);
  return res;
}
solution(2, 26);
