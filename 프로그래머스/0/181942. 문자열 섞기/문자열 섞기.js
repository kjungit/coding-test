function solution(str1, str2) {
    const str2Arr= str2.split("")
    var answer = str1.split("").map((item, index) =>  item+str2Arr[index] )
    return answer.join("");
}