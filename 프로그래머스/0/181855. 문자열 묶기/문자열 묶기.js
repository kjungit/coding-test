function solution(strArr) {
    const lenCnt = {}
    
    for (let str of strArr) {
        const len = str.length;
        lenCnt[len] = (lenCnt[len] || 0) + 1;
    }
    return Math.max(...Object.values(lenCnt));
}