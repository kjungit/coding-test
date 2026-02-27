function solution(rsp) {
    const data = {
        "2" : "0",
        "0" : "5",
        "5" : "2",
    }
    let res = []
    for (i of rsp.split("")) {
        res.push(data[i])
    }
    return res.join("")    
}