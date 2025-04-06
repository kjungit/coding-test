function solution(arr) {
    let cnt = 0;
    const ex = ["aya", "ye", "woo", "ma"]
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < ex.length; j++) {
            if(arr[i].startsWith(ex[j])) {
                arr[i] = arr[i].slice(ex[j].length)
                if (arr[i].length === 0) cnt++
                j = -1;
            }
        }
    }
    
    return cnt;
}