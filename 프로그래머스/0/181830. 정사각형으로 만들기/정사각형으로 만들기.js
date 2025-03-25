function solution(arr) {
    const row = arr.length
    const cor = arr[0].length
    if (row > cor) {
        for (let i = 0; i < row; i++) {
            let isWhile = arr[i].length < row
            while(isWhile) {
                arr[i].push(0)
                isWhile = arr[i].length < row
            }
        }
    } else {
        for (let i = 0; i < cor; i++) {
            let isWhile = arr.length < cor
            while(isWhile) {
                arr.push([])
                isWhile = arr.length < cor
            }
            
        }
        const row = arr.length

        for (let i = 0; i < row; i++) {
            let isWhile = arr[i].length < row
            while(isWhile) {
                arr[i].push(0)
                isWhile = arr[i].length < row
            }
        }
    }

    return arr;
}