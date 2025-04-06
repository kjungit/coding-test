function solution(numbers, k) {    
    const n = 2 * (k - 1) % numbers.length
    return numbers[n];
}