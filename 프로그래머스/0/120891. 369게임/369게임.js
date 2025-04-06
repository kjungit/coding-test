function solution(order) {
    let cnt = 0;
    String(order).split("").forEach((i) => {
        if([3, 6, 9.].includes(Number(i))) cnt++
    })
    return cnt;
}