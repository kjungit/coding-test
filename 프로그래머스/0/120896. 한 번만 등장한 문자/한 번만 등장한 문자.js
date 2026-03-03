function solution(s) {
    const obj = s.split("").reduce((acc, cur) => {
        if (acc[cur]) {
            acc[cur] += 1
        } else {
            acc[cur] = 1
        }
        return acc
    }, {})
    return Object.keys(obj).filter(key => obj[key] === 1).sort().join("")
}