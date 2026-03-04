function solution(n) {
    const arr = []
    let cnt = 1
    while (arr.length < n) {
        if (cnt % 3 !== 0 && !String(cnt).includes("3")) {
            arr.push(cnt)
        }
        cnt++
    }
    return arr[arr.length - 1];
}