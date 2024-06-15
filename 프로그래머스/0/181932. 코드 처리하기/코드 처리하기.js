function solution(code) {
    var answer = '';
    let mode = 0
    code.split("").forEach((item, index) => {
        if(item === "1" && mode === 0) return mode = 1
        if(item === "1" && mode === 1) return mode = 0
        
        if(mode === 0 && item !== "1" && index % 2 === 0) {
            answer += item
            return
        }
        
        if(mode === 1 && index % 2 === 1) {
            answer += item
            return
        }
    })
    return answer ? answer : "EMPTY";
}