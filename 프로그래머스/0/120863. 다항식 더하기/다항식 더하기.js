function solution(polynomial) {
    const arr = polynomial.split(" + ")
    const multy = arr.filter(v => v.includes("x")).map(i => +i.replaceAll("x", "") || 1).reduce((a, c) => a + c, 0)
    const nums = arr.filter(v => !v.includes("x")).reduce((a, c) => a + +c, 0)
    
    const answer = []
    
    if (multy) {
        if (multy === 1) {
            answer.push("x")
        } else {
            answer.push(`${multy}x`)
        }
    }
    
    if (nums) {
        answer.push(nums)
    }
    return answer.join(" + ")
}