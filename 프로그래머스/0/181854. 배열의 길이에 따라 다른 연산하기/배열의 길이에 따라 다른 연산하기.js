function solution(arr, n) {
    if (arr.length % 2 === 0 ) {
        return arr.map((v, i) => {
            if (i % 2 !== 0) {
                return v += n
            }
            return v
        })
    } else {
        return arr.map((v, i) => {
            if (i % 2 === 0 ) {
                return v += n
            }
            return v
        })
    }
}