function solution(age) {
    const en = "abcdefghij"
    return String(age).split("").map(v => en[v]).join("");
}