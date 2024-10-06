function solution(my_string, n) {
    let length = my_string.length - n
    
    return my_string.slice(length);
}