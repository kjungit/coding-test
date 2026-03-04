function solution(score) {
    // const arr = [...score].sort((a, b) => (b[0] + b[1]) - (a[0] + a[1]) )
    // return score.map((v) => arr.indexOf(v)+1);
    
    const all = score.map(v => v[0] + v[1])
    const arr = all.slice().sort((a, b) => b - a)
    return all.map((v) => arr.indexOf(v) + 1)
}