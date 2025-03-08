function solution(strArr) {
    return strArr.map((item, index) =>  {
        if (index % 2 == 0) {
            return item.toLowerCase()
        } else {
            return item.toUpperCase()
        }
    })
}