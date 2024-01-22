function solution(str1, str2) {
    var answer = str1.split("").map((item, index) =>  item + str2[index])
    return answer.join("");
}