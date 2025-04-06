function solution(n_str) {
    let isZ = false
    return n_str.split("").map((i) => {
        if (!isZ && i === "0") return
        else isZ = true
        return i
    }).join("")
}