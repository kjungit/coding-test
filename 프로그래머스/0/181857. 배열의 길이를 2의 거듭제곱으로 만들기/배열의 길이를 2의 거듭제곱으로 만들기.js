function solution(arr) {
    function nextPowerOfTwo(n) {
      if (n < 1) return 1; // 기본값: 1로 리턴
      return 2 ** Math.ceil(Math.log2(n));
    }
    
    const len = nextPowerOfTwo(arr.length) - arr.length
    return arr.concat(Array(len).fill(0));
}