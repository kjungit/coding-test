function solution(binomial) {
    const [a, b, c] = binomial.split(" ")

    if (b === "+") return Number(a) + Number(c)
    else if (b === "-") return Number(a) - Number(c)
    else if (b === "*") return Number(a) * Number(c)
}