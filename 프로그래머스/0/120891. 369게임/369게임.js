function solution(order) {
    return String(order).split("").filter(v => ["3", "6", "9"].includes(v)).length;
}