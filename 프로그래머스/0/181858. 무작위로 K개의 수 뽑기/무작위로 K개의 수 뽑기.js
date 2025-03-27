function solution(arr, k) {
    const set = new Set(arr);
    const uniqueArr = [...set].slice(0, k);
    const len = k - uniqueArr.length
    if (len) return uniqueArr.concat(Array(len).fill(-1) )
    return uniqueArr;
}