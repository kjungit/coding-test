function solution(num_list) {
    const {oddSum, evenSum} = num_list.reduce((acc, cur, idx) => {
        (idx + 1) % 2 === 1 ? acc.oddSum += cur : acc.evenSum += cur;
        return acc
    }, {oddSum: 0, evenSum: 0})
    return Math.max(oddSum, evenSum)
}