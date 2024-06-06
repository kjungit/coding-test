function solution(my_string, overwrite_string, s) {
    const my_str_length = overwrite_string.length
    const start_str = my_string.slice(0, s)
    const end_str = my_string.slice(my_str_length + s)
    return start_str + overwrite_string + end_str
}