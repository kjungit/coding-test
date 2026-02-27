function solution(numbers, direction) {
    if (direction === 'right') {
        const last = numbers.pop()
        numbers.unshift(last)
    } else {
        const last = numbers.shift()
        numbers.push(last)
    }
    return numbers;
}