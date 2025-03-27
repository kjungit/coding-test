function solution(arr) {
    const stk = []
    let i = 0
    while (i < arr.length) {
        const isEmpty = stk.length === 0
        if (isEmpty) {
            stk.push(arr[i])
            i += 1
        } else if (!isEmpty && stk[stk.length - 1] === arr[i]) {
            stk.pop()
            i += 1
        } else if (!isEmpty && stk[stk.length - 1] !== arr[i]) {
            stk.push(arr[i])
            i += 1
        }
    }
    if (stk.length === 0) return [-1]
    return stk;
}