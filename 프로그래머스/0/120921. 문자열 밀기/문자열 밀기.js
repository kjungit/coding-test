function solution(A, B) {
    let count = 0
    const arr = B.split("")
    
    if (A === B) return 0

    for (let i = 0; i < A.length; i++) {
        const str = arr.shift()
        arr.push(str)
        count++
        
        if (A === arr.join("")) {
            return count
        }
    }
    
    return -1;
}