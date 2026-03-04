function solution(numbers) {
    const str = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    str.forEach((v, i) => numbers = numbers.replaceAll(v, i))
    
    return +numbers;
}