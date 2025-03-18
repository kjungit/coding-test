function solution(myString, pat) {
    const arr = []
    for (let i = 0 ; i <= myString.length; i++) {
        arr.push(myString.slice(i, i+pat.length))
    }
    const n = myString.length - arr.reverse().findIndex((i) => i === pat)
    
    return myString.slice(0, n + pat.length);
}