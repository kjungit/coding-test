function solution(spell, dic) {
    // let count = 0;
    // for(let i = 0; i < dic.length; i++) {
    //     const arr = dic[i].split("")
    //     if ([...new Set(spell)].every(v => new Set(arr).has(v))) {
    //         count++
    //     }
    // }
    // return count === 0 ? 2 : 1;
    
    return dic.some((v) => [...v].sort().toString() === [...spell].sort().toString()) ? 1 : 2
}