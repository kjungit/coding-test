function solution(arr, query) {
    query.forEach((i, index) => {
        if(index % 2 === 0) {
            arr.splice(i + 1)
        } else {
            arr.splice(0, i)
        }
    })
    return arr;
}