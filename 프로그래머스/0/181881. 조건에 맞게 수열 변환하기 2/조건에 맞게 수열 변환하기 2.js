function solution(arr) {
    let arr1 = [...arr] 
    let arr2 = []
    let count = 0
    let isWhile = true
    const func = (list) => {
        return list.map((item, idx) => {
            if (50 <= item && item % 2 === 0) {
                return item / 2  
            } else if (50 > item && item % 2 !== 0) {
                return item * 2 + 1
            } else {
                return item
            }
        })
    }
    const isEqual = (a, b) => JSON.stringify(a) === JSON.stringify(b);
    while (isWhile) {
        arr2 = func(arr1)
        count++
        const isSame = isEqual(arr1, arr2)
        if (isSame) isWhile = false
        arr1 = arr2
    }
    
    
    return count - 1;
}