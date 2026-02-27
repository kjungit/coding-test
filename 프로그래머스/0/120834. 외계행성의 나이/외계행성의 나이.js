function solution(age) {
    const en = "abcdefghijklmnpqrstuvwxyz"
    return String(age).split("").map(v => en[v]).join("");
}