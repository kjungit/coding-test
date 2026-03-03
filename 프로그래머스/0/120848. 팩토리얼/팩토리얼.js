function solution(n) {
    var answer = 1;
    let count = 1;
    
    while (answer <= n) {
        answer *= count
        count++
    }
    return count - 2;
}