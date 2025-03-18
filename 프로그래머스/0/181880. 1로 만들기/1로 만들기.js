function solution(num_list) {
    const curFunc = (n) => {
        let count = 0
        while (n !== 1) {
            if (n % 2 === 0) {
                n /= 2
            } else {
                n = (n - 1) / 2
            }
            count++
        }
        console.log(count)
        return count
    }
    
    return num_list.reduce((acc, cur) => acc + curFunc(cur), 0)    
}