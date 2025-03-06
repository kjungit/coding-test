function solution(myString, pat) {
    const str = [...myString].map((i) => i === "A" ? "B" : "A").join("")
    return str.includes(pat) ? 1 : 0
}