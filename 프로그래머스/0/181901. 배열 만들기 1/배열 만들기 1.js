function solution(n, k) {
    var answer = [];
    for(let i = 1; i <= n; i++) {
        const cur = k * i // 0, 3, 6, 9, 12
        if(cur <= n) {
            answer.push(cur)
        } else {
            i = n
        }
        
        
      
    }
    return answer;
}