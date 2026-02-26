function solution(array, height) {
    var answer = 0;
    return array.filter((i) => i > height).length;
}