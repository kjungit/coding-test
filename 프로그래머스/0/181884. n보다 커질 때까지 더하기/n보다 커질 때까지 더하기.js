function solution(numbers, n) {
    return numbers.reduce((acc, cur) => n < acc ? acc : acc + cur, 0)
}