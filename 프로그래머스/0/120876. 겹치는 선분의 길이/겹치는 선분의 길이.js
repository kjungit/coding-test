function solution(lines) {
    const arr = []
    
    for (let i = 0; i < lines.length; i++) {
        const [j, k] = lines[i]
        const addArr = []
        for (let l = j; l < k; l++) {
            addArr.push(`${l}-${l+1}`)
        }
        arr.push(addArr)
    }
    
    const setA = new Set(arr[0])
    const setB = new Set(arr[1])
    const setC = new Set(arr[2])
    console.log(arr)
    
    return new Set([
        ...[...setA].filter(v => setB.has(v)),
        ...[...setA].filter(v => setC.has(v)),
        ...[...setB].filter(v => setC.has(v)),
    ]).size 
}