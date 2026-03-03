function solution(i, j, k) {
    let str = '';
    for (let v = i; v <= j; v++) {
        str += v
    }
    return str.split("").filter(v => v == k).length
}