function solution(my_string, letter) {
    const arr = []
    for (i of [...my_string]) {
        if (i !== letter) {
            arr.push(i)
        }
    }
    return arr.join("");
}