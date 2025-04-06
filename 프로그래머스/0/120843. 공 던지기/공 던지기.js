function solution(numbers, k) {
    let cur = 1
    let count = k
    
    while (count !== 1) {
       if (cur + 2 > numbers.length) {
           cur = cur + 2 - numbers.length
       } else {
           cur += 2
       }
        count -= 1
    } 
    
    
    return cur;
}