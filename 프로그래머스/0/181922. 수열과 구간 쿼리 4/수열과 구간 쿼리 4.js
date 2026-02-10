function solution(arr, queries) {
    for ([s, e, k] of queries) {
        if (k === 0) continue;
        
        for (let i = s; i <= e; i++) {
            if(i % k === 0) arr[i] += 1
        }
    }
    
    return arr
}