function solution(s) {
    const arr = s.split(" ")
    return arr.reduce((acc, cur, i) => {
        if (cur === 'Z') {
            return Number(acc) - Number(arr[i - 1])
        } else {
            return Number(acc) + Number(cur)
        }
    }, 0)
}