function solution(array, n) {
    let res = 0;
    let inf = Infinity;
    
    array.sort((a, b) => a - b)
    for (i of array) {
        if(Math.abs(n-i) < inf) {
            inf = Math.abs(n-i)
            res = i
        }        
    }
    return res    
}