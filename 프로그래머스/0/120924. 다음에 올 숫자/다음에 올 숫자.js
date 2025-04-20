function solution(common) {
    const nextArithmetic = (arr) => {
        const diff = arr[1] - arr[0];
        return arr[arr.length - 1] + diff
    }
    
    const nextGetmetric = (arr) => {
        const ratio = arr[1] / arr[0];
        return arr[arr.length - 1] * ratio
    }
    
    const isArithmetic = common[1] - common[0] === common[2] - common[1]
    const isGeometric = common[1] / common[0] === common[2] / common[1]

    if(isArithmetic) return nextArithmetic(common)
    if(isGeometric) return nextGetmetric(common)
    
}