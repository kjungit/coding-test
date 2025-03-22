function solution(myStr) {
    const strArr = myStr.split("")
    const res = []
    let str = ""

    for (let i = 0; i < strArr.length; i++) {
        if(["a", "b", "c"].includes(strArr[i])) {
            if (str.length > 0 ) res.push(str)
            str = ""
        } else {
            str += strArr[i]
        }
    }
    
    if (str.length > 0) res.push(str);
    
    if (!res.length) return ["EMPTY"]
    
    return res
}