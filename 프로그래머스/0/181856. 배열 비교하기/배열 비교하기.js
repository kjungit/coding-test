function solution(arr1, arr2) {
    const aLen = arr1.length
    const bLen = arr2.length
    const aSum = arr1.reduce((acc, cur) => acc + cur, 0)
    const bSum = arr2.reduce((acc, cur) => acc + cur, 0)
    
    if(aLen < bLen) {
        return -1
    } else if (aLen > bLen) {
        return 1
    } else {
        if (aSum < bSum) {
            return -1
        } else if (aSum > bSum) {
            return 1
        } else {
            return 0
        }
    }
}