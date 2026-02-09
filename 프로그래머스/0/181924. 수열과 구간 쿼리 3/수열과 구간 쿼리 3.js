function solution(arr, queries) {

    queries.forEach((i) => {
        const num = arr[i[0]]
        arr[i[0]] = arr[i[1]]
        arr[i[1]] = num
    })
    
    return arr
}

