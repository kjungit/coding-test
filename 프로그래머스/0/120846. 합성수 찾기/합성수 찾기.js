function solution(n) {
    let count = 0
    function isComposite(num) {
        if (num <= 1) return false
        let count = 0;
        for (let i = 1; i <= num; i++) {
            if (num % i === 0) count++;
        }
        return count > 2
    }
    for(let i = 1; i <= n; i++) {
        if(isComposite(i)) count++
    }

    return count
}