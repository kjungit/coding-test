function solution(emergency) {
    var answer = [];
    const arr = emergency.reduce((acc, cur, index) => {
        acc[cur] = index + 1
        return acc
    }, {})
    const obj = Object.entries(arr).sort((a, b) =>  Number([0]) - Number(b[0]))
    obj.forEach((v, i) => {
        arr[v[0]] = i + 1
    })
    return emergency.map((v) => arr[v])
}