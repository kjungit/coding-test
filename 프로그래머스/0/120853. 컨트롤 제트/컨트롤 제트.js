function solution(s) {
    const res = [] 
    s = s.split(" ")
    for (v of s) {
        if (v === "Z") {
            res.pop()
        } else {
            res.push(+v)
        }
    }
    
    return res.reduce((a, c) => a + c, 0)
}