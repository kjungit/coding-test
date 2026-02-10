function solution(l, r) {
    var answer = [];
    for (let i = l; i <= r; i++) {
        const str = String(i).split("")
        const isTrue = str.every(v => v === "0" || v === "5")
        if (isTrue) {
            answer.push(i)
        }
    }
    return answer.length ? answer : [-1];
}